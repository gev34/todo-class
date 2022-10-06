import './App.css';
import React from 'react'
import AddTodo from './AddTodo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    todos: "",
    addTodo:false,
    arrOfTodos:[]
  };
  }
  render() {
    return (
      <div>
        <input type="text" onChange={(e) => {
          this.setState({todos : e.target.value}) 
        }}/>
        <button onClick={() => {
          this.state.arrOfTodos.push(this.state.todos)
          this.setState({addTodo : true}) 
        }}>Add</button>
        {this.state.addTodo && <AddTodo addTodo = {this.state.addTodo} arrOfTodos = {this.state.arrOfTodos}/>}
      </div>
    );
  }
}