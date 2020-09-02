import * as angular from 'angular';
import { TodoFormComponent } from './component/todoform.component';
import { TodoListComponent } from './component/todolist.component';
import { TodoService } from './service/todo.service';

angular.module('app', [])
.service('todoService', TodoService)
.component('todoForm', TodoFormComponent)
.component('todoList', TodoListComponent);
