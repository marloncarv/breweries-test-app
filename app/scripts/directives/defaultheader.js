'use strict';

/**
 * @ngdoc directive
 * @name brewerApp.directive:defaultHeader
 * @description
 * # defaultHeader
 */
angular.module('brewerApp')
  .directive('defaultHeader', function () {
    return {
      templateUrl: './templates/defaultHeader.html',
      restrict: 'E',
      scope: {
        title: '@',
        subtitle: '@'
      }
    };
  });
