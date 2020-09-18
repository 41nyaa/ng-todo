import { TodoController } from '../controller/todo.controller';

export const TodoComponent : angular.IComponentOptions = {
    controller : TodoController,
    template : `
        <form ng-submit="$ctrl.addTodo()">
        <input type="text" ng-model="$ctrl.input"> 
        <input type="submit" value="add"> 
        </form>
        <ul>
        <li ng-repeat="todo in $ctrl.todos">
        <span ng-mode="todo.task">{{todo.task}}</span>
        <button type="button" ng-click="$ctrl.delTodo($index)">del</button>
        </li>
        </ul>
        `
}