export interface Todo {
    task : string;
    done : boolean;
}

export class TodoService{
    todos: Todo[];
    uri  : string;

    constructor(private $q: ng.IQService){
        this.todos = [];
        this.uri   = 'http://localhost:3000/todo'; 
    }

    public addTodo(task : string) : ng.IPromise<string> {
        const newTodo = { task : task, done : false };
        var deffered = this.$q.defer<string>();

        fetch(this.uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        }).then(response => {
            const get : ng.IPromise<string> = this.getTodos();
            get.then(data=>{
                deffered.resolve(data);
            });
 
        });
        return deffered.promise;
    }

    public delTodo(index : number) : void {
        //todo
    }

    public getTodos() : ng.IPromise<string> {
        var deffered = this.$q.defer<string>();
        fetch(this.uri)
        .then(response => {
            deffered.resolve(response.text());
        })
        
        return deffered.promise;
    }
}