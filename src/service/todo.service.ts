export interface Todo {
    task : string;
    done : boolean;
}

export class TodoService{
    todos: Todo[];

    constructor(private $q: ng.IQService){
        this.todos = [];
    }

    public addTodo(task : string) : void {
        const newTodo : Todo = { task : task, done : false };
        var deffered = this.$q.defer<string>();

        var post = function() : ng.IPromise<string> {
            fetch('http://localhost:3000/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            }).then(response => {
                deffered.resolve(response.text());
            });
            return deffered.promise;
        }

        post().then((data : string) => {
            const todos = JSON.parse(data) as Todo[];
            this.todos = [...todos].reverse();
        })
    }

    public delTodo(index : number) : void {
        const length = this.todos.length;
        this.todos.splice(length-1-index,1);
    }

    public getTodos() : Todo[] {
        fetch("http://localhost:3000/todo")
        .then(response => {
            return response.text();
        })
        .then((data : string) =>{
            const todos = JSON.parse(data) as Todo[];
            this.todos = [...todos].reverse();
        });
        return this.todos;
    }
}