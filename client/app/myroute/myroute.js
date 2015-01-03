'use strict';

angular.module('myangularfullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/myroute', {
        templateUrl: 'app/myroute/myroute.html',
        controller: 'MyrouteCtrl'
      });
  });
