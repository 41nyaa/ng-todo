import * as angular from 'angular';
//import { TodoFormComponent } from './component/todoform.component';
import { TodoComponent } from './component/todo.component';
import { TodoService } from './service/todo.service';

angular.module('app', [])
.service('todoService', TodoService)
//.component('todoForm', TodoFormComponent)
.component('todoList', TodoComponent);
