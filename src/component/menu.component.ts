import { MenuController } from '../controller/menu.controller';

export const MenuComponent /*: angular.IComponentOptions*/ = {
    controller : MenuController,
    $routeConfig:[
        {path:'todo', name:'Todo', component:'todo' }
    ],
    template :`<nav>
                <a ng-link="['Todo']">Todo</a>
                </nav>
                <ng-outlet></ng-outlet>
                `
}