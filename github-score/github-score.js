'use strict';
var http = require('q-io/http');
//https://api.github.com/repos/jasonrudolph/keyboard/contributors
//https://api.github.com/repos/jasonrudolph/keyboard/commits
//contributions /\
//https://api.github.com/repos/jasonrudolph/keyboard/contributors
var githubRepoApiString = 'api.github.com/repos'; //jasonrudolph/keyboard';
var user = 'jasonrudolph';
var repoName = 'keyboard';
var getGithubRequestOptionsFromURL = function (urlString) {
  return {
    'url': urlString,
    'method': 'GET',
    'headers': {
      'user-agent': 'My-Cool-GitHub-App' // GitHub is happy with a unique user agent
    },
    'scheme': 'https'
  };
};
var getGithubRequestOptionsFromUserAndRepo = function (userString, repoString, postfix) {
  var urlString = 'https://' + githubRepoApiString + '/' + userString + '/' + repoString;
  if (postfix) {
    urlString = urlString + '/' + postfix;
  }
  return getGithubRequestOptionsFromURL(urlString);
};

var getGitHubStars = function (requestOptions) {
  console.log(requestOptions.url);
  return http.request(requestOptions).then(function (res) {

    return res.body.read();
  }, function (err) {
    console.err(err.toString());
  });
};
var getStarsFromStream = function (stream) {
  var stringValue = stream.toString();
  var responseJSON = JSON.parse(stringValue);
  var stargazersCount = responseJSON['stargazers_count'];
  var forksCount = responseJSON['forks'];

  console.log('stargazersCount:' + stargazersCount);
  console.log('forksCount:' + forksCount);
  return stargazersCount;
};
var getStarGazersAndForks = function (stream) {
  var starGazersAndForks = ['stargazers_count', 'forks'];
  getValuesFromStream(stream, starGazersAndForks);
};
var getValuesFromStream = function (stream, values) {
  var stringValue = stream.toString();
  var responseJSON = JSON.parse(stringValue);
  values.forEach(function (item) {
    console.log(item + ':' + responseJSON[item]);
  });

};
getGitHubStars(getGithubRequestOptionsFromUserAndRepo(user, repoName)).done(getStarGazersAndForks, console.err);