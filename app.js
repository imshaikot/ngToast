/**
 * Created by abuhena on 1/26/16.
 */
'use strict'

angular.module("myApp", ['ng-toast']).
    controller("myCtrl", ['$scope', 'ngToast', function ($scope, ngToast) {

        $scope.showTop = function () {
            ngToast.show("Test toast text!", 'top');
        }

        $scope.showBottom = function () {
            ngToast.show("Test toast text!", 'bottom');
        }

    }]);