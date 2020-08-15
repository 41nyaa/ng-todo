import * as angular from 'angular';

module App {
    interface AppScope extends ng.IScope {
        hogehoge: string;
    }

    class AppController {
        constructor($scope: AppScope) {
            $scope.hogehoge = "Hello Angularjs!!!";
        }
    }

    angular.module("app", []).controller("appController", ["$scope", AppController]);
}