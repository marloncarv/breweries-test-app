'use strict';

/**
 * @ngdoc function
 * @name brewerApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the brewerApp
 */
angular.module('brewerApp')
  .controller('DetailCtrl', function ($route, $scope, $location) {
    if($route.current.$$route.params){
      $scope.obj = $route.current.$$route.params
    }else {
      $location.url('/')
    }
  });
