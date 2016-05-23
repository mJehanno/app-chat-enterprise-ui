'use strict';

/**
 * @ngdoc function
 * @name testAngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngApp
 */
angular.module('testAngApp').controller('MainCtrl', function ($scope,$http) {
    this.login = function(){
        console.log("yeaaaaaaaaaaaaaaaah");
        $http({
           method: "POST",
            url: "http://localhost:3000/api/auth",
            data: ""
        });
    };
  });
