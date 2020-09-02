import { Todo, TodoService } from '../service/todo.service';

export class TodoController {
    static $inject : string[] = ['todoService'];
    input: string;

    constructor(private todoService: TodoService){
    }

    public addTodo() : void {
        this.todoService.addTodo(this.input);
    }

    public delTodo(index : number) : void {
        this.todoService.delTodo(index);
    }

    public getTodoList() : Todo[] {
        return this.todoService.getTodos();
    }
}
