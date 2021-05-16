'use strict';

/**
 * @ngdoc directive
 * @name brewerApp.directive:breweryDetailCard
 * @description
 * # breweryDetailCard
 */
angular.module('brewerApp')
  .directive('breweryDetailCard', function () {
    return {
      templateUrl: './templates/breweryDetailCard.html',
      restrict: 'E',
      
    };
  });
