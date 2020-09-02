import { TodoController } from '../controller/todo.controller';

export const TodoFormComponent : angular.IComponentOptions = {
    controller : TodoController,
    template : `
        <form ng-submit="$ctrl.addTodo()">
        <input type="text" ng-model="$ctrl.input"> 
        <input type="submit" value="add"> 
        </form>`
}