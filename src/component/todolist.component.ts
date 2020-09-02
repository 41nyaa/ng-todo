import { TodoController } from '../controller/todo.controller';

export const TodoListComponent : angular.IComponentOptions = {
    controller : TodoController,
    template : `
        <ul>
        <li ng-repeat="todo in $ctrl.getTodoList()">
        <input type="checkbox" ng-model="todo.done" />
        <span>{{todo.task}}</span>
        <button type="button" ng-click="$ctrl.delTodo($index)">del</button>
        </li>
        </ul>`
}