import * as angular from 'angular';

module App {
    interface Todo {
        task : string;
        done : boolean;
    }
    interface AppScope extends ng.IScope {
        todos: Todo[];
        input: string;
        addTodo: () => void;
    }

    class AppController {
        constructor($scope: AppScope) {
            $scope.todos = [];
            $scope.input = 'input...';
            $scope.addTodo = function(){
                console.log("addTodo!!!"+ $scope.input);
                $scope.todos.push({task: $scope.input, done: false});
              };
        }
    }

    angular.module("app", []).controller("appController", ["$scope", AppController]);
}