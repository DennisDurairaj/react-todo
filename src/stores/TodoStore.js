import EventEmitter from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
          id: 1,
          text: 'Learn React',
          complete: false
      },
      {
          id: 2,
          text: 'Master React',
          complete: false
      },
      {
          id: 3,
          text: 'Learn Redux',
          complete: false
      }
    ];
  }

  getAllTodos() {
    return this.todos;
  }

  addTodo(text) {
    const todo = {text, id: this.todos.length+1, complete: false};
    this.todos.push(todo);

    this.emit("TodoAdded");
  }

  removeTodo(id) {
    const remainders = this.todos.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    this.todos = remainders;

    this.emit("TodoRemoved");
  }

  handleActions(action) {
    switch(action.type) {
      case "ADD_TODO": {
        this.addTodo(action.text);
      }
      case "REMOVE_TODO": {
        this.removeTodo(action.id);
      }
    }
  }
};

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
