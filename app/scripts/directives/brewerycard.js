'use strict';

/**
 * @ngdoc directive
 * @name brewerApp.directive:breweryCard
 * @description
 * # breweryCard
 */
angular.module('brewerApp')
  .directive('breweryCard', function () {
    return {
      templateUrl: './templates/breweryCard.html',
      restrict: 'E',
      scope: {
        data: '@',
      },
      controller: function($scope, $location, $route) {
        $scope.obj = JSON.parse($scope.data);

        $scope.getBadgeClass = function (type){
          switch (type) {
            case 'micro':
              return 'bg-info'
            case 'contract':
              return 'bg-dark'
            case 'brewpub':
              return 'bg-warning'
            case 'regional':
              return 'bg-primary'
            default:
              return 'bg-info'
          }
        }

        $scope.goToDetails = function(obj) {
          $route.routes['/detail'].params = obj
          $location.url('/detail')
        }
      }
    };
  });
