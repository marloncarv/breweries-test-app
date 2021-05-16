'use strict';

/**
 * @ngdoc directive
 * @name brewerApp.directive:pagination
 * @description
 * # pagination
 */
angular.module('brewerApp')
  .directive('pagination', function () {
    return {
      templateUrl: './templates/pagination.html',
      restrict: 'E',
      controller: function($scope) {
        $scope.isSelectedPage = function(page) {
          if(page === $scope.currentPage){
            return 'btn-dark'
          }
          return 'btn-outline-secondary'
        }
      }
    };
  });
