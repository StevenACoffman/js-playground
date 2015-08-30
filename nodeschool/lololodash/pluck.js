/*global $:false, Highcharts:false*/
function showFinalGradeDeadlineProximity(data) {
  'use strict';
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var rowClass = item.isRequired === true ? 'dashboard-required' : 'dashboard-not-required';
    var badgeClass = item.isOverdue === true ? 'dashboard-overdue' : 'dashboard-not-yet-due';
    $('#gradingDeadlineProximityTable tr:last').after(
      '<tr class="' + rowClass + '"><td>' + item.catalogNumber + '</td>' +
      '<td>' + item.period + '</td>' +
      '<td>' + item.dueDate + '</td>' +
      '<td><span class="badge ' + badgeClass + '">' + item.daysUntilDeadline + '</span></td></tr>');
  }
}

function showTimeliness(data, reportName) {
  'use strict';
  var showAcceptable,
    typeOfThingCounted;
  if (reportName === '.gradeSummary') {
    showAcceptable = true;
    typeOfThingCounted = 'Grade';
  } else {
    showAcceptable = false;
    typeOfThingCounted = 'MidClerkShip Feedback';
  }

  var departments = [];
  var acceptable = [];
  var desirable = [];
  var late = [];
  var academicYear = $('#academicYear option:selected').text();
  for (var i = 0; i < data.departmentStatisticsList.length; i++) {
    var stats = data.departmentStatisticsList[i];
    departments[i] = stats.department;
    if (showAcceptable) {
      acceptable[i] = stats.acceptable;
    }
    desirable[i] = stats.desirable;
    late[i] = stats.late;
  }

  var chartData = {
    chart: {
      marginBottom: 100,
      type: 'column'
    },
    title: {
      style: {
        fontSize: '12px'
      },
      text: 'Totals for Academic Year ' + academicYear
    },
    xAxis: {
      categories: departments
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total count of ' + typeOfThingCounted + ' in each category'
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        }
      }
    },
    legend: {
      align: 'right',
      x: -20,
      verticalAlign: 'bottom',
      y: 0,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + '<br/>' +
          'Total: ' + this.point.stackTotal;
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          style: {
            textShadow: '0 0 3px black, 0 0 3px black'
          },
          formatter: function () {
            if (this.y > 0) {
              return this.y;
            }
          }
        }
      }
    },
    series: [{
      name: 'Late',
      data: late,
      legendIndex: 3,
      color: '#e89190'
    }, {
      name: 'Desirable',
      data: desirable,
      legendIndex: 1,
      color: '#18bc9c'
    }]
  };
  if (showAcceptable) {
    chartData.series.splice(1, 0, {
      name: 'Acceptable',
      data: acceptable,
      legendIndex: 2,
      color: '#ece98d'
    });
  }
  $(reportName).highcharts(chartData);
}

function showGradeDistribution(data) {
  'use strict';
  console.log(data);
  $('#gradeDistributionPieChart').highcharts({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 1, //null,
      plotShadow: false
    },
    title: {
      text: 'Acceptable/Desirable/Late'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        },
        colors: ['#18bc9c', '#ece98d', '#e89190']
      }
    },
    series: [{
      type: 'pie',
      name: 'Grade Release Status',
      data: [
        ['honors', data.honorsCount],
        ['highPass', data.highPassCount],
        ['pass', data.passCount],
        ['fail', data.failCount],
        ['noCredit', data.noCreditCount],
        ['satisfactory', data.satisfactoryCount],
        ['unsatisfactory', data.unsatisfactoryCount],
        ['incomplete', data.incompleteCount],
        ['incompleteExam', data.incompleteExamCount]
      ]
    }]
  });
}

function loadTimelinessAndShowIt(url, reportName) {
  'use strict';
  $.getJSON(url, (function (closureReportName) {
      return function (data) {
        showTimeliness(data, closureReportName);
        // create a new closure on the parameter closureReportName
        // which will hold the correct value at invocation time
      };
    }(reportName)) // calling the function with the current value
  );
}


$(document).ready(function () {
  'use strict';
  var url = './dashboard/final-grade-timeliness';
  loadTimelinessAndShowIt(url, '.gradeSummary');

  url = './dashboard/required-course-final-grade-distribution';
  $.getJSON(url, function (data) {
    showGradeDistribution(data);
  });

  url = './dashboard/grade-deadline-proximity';
  $.getJSON(url, function (data) {
    showFinalGradeDeadlineProximity(data);
  });

  url = './dashboard/mid-clerkship-feedback-timeliness';
  loadTimelinessAndShowIt(url, '.midclerkship-feedback');

});
