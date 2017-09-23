import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoStore from './stores/TodoStore';
import * as TodoActions from './actions/TodoActions'
import TodoForm from './TodoForm.js';
import TodoList from './TodoList';
import Title from './Title';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: TodoStore.getAllTodos()
    }
  }

  componentWillMount() {
    TodoStore.on("TodoAdded", this.getAllTodos);

    TodoStore.on("TodoRemoved", this.getAllTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("TodoAdded", this.getTodos)
  }

  getAllTodos = () => {
    this.setState({todos: TodoStore.getAllTodos()});
  }

  removeTodo(id) {
    TodoActions.removeTodo(id);
  }

  addTodo(text) {
    TodoActions.addTodo(text);
  }

  render() {
    return (
      <div>
        <Title number={this.state.todos.length}/>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} remove={this.removeTodo}/>
      </div>

    );
  }
}

export default App;
