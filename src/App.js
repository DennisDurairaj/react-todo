import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import todos from './data/todos';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList';
import Title from './Title';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }
  }
 addTodo = (val) => {
    const todo = {text: val, id: this.state.todos.length+1};
    this.state.todos.push(todo);
    this.setState({todos: this.state.todos});
  }
  

  removeTodo = (id) => {
    const remainders = this.state.todos.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    this.setState({todos: remainders});
  }

  render() {
    return (
      <div>
        <Title number={this.state.todos.length} />
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} remove={this.removeTodo}/>
      </div>

    );
  }
}

export default App;
