export interface Todo {
    task : string;
    done : boolean;
}

export class TodoService{
    todos: Todo[];

    constructor(){
        this.todos = [];
    }

    public addTodo(task : string) : void {
        this.todos.push({task : task, done : false});

    }

    public delTodo(index : number) : void {
        const length = this.todos.length;
        this.todos.splice(length-1-index,1);
    }

    public getTodos() : Todo[] {
        return [...this.todos].reverse();
    }
}