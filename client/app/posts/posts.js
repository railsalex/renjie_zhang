'use strict';

angular.module('assignmentApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts', {
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsCtrl'
      });
  });
