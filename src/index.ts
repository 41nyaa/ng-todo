import * as angular from 'angular';
import '@angular/router/angular1/angular_1_router';
import { MenuComponent } from './component/menu.component';
import { TodoComponent } from './component/todo.component';
import { TodoService } from './service/todo.service';

const app = angular.module('app',['ngComponentRouter'])
.component('menu', MenuComponent)
.component('todo', TodoComponent)
.service('todoService', TodoService);

app.value('$routerRootComponent', 'menu');
