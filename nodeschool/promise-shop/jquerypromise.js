/* jshint esnext:true, devel:true, browser:true, jquery:true, -W024 */
function postModifiedData(data) {
  'use strict';
  var json = {
    json: JSON.stringify(data),
    delay: 1
  };
  //echo(json);
  return Promise.resolve($.post('/echo/json/', json));
}

$('.list').on('click', function() {
  'use strict';

  Promise.resolve($.get('http://echo.jsontest.com/uid/12345/value/nuno_bettencourt'))
    .then(postModifiedData)
    .then(function(json) {
      alert('UID=' + json.uid + '\nName=' + json.value);
    });

});

//var jqDeferredGet = $.get('http://echo.jsontest.com/uid/12345/value/nuno_bettencourt');
//var jsPromisedGet = Promise.resolve(jqDeferredGet);
