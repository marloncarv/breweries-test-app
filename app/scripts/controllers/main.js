'use strict';

/**
 * @ngdoc function
 * @name brewerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the brewerApp
 */
angular.module('brewerApp')
  .controller('MainCtrl', function ($scope, $http, $route) {
    $scope.breweryList = []
    $scope.filter = ''
    $scope.currentPage = 1

    $scope.getBreweries = function(page) {
      this.currentPage = 1
      if(page){
        this.currentPage = page
      }else {
        getSavedFilters()
      }

      this.breweryList = []
      $http.get(`https://api.openbrewerydb.org/breweries?by_type=${$scope.filter}&page=${$scope.currentPage}`).then(function (response){
        $scope.breweryList = response.data
        saveFilters()
      })
    }

    let saveFilters = function() {
      let search = {
        filter: $scope.filter,
        page: $scope.currentPage
      }

      $route.current.$$route.params = search

    }

    let getSavedFilters= function() {
      let params = $route.current.$$route.params
      if(params){
        $scope.filter = params.filter
        $scope.currentPage = params.page
      }
    }

    $scope.getBreweries()
  });
