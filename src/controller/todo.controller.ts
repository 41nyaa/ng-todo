import { Todo, TodoService } from '../service/todo.service';

export class TodoController {
    static $inject : string[] = ['todoService'];
    public todos : Todo[];
    public input: string;

    constructor(private todoService: TodoService){
        this.todos = [];
    }

    public addTodo() : void {
        let _self=this;
        const post : ng.IPromise<string> = this.todoService.addTodo(this.input);
        post.then((data : string) => {
            const obj = <Todo[]>JSON.parse(data);
            _self.todos = obj.reverse();
        });
    }

    public delTodo(index : number) : void {
        this.todoService.delTodo(index);
    }
}
