import "./App.css";
import React from "react";
import AddTodo from "./AddTodo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: "",
      addTodo: false,
      arrOfTodos: [],
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ todos: e.target.value });
          }}
        />
        <button
          onClick={() => {
            if (this.state.todos !== "") {
              this.state.arrOfTodos.push(
                { 
                  id: Math.random(),
                  todo: this.state.todos 
                }
              );
            }
            this.setState({ addTodo: true });
                  console.log(this.state.arrOfTodos);
          }}
        >
          Add
        </button>
        {this.state.addTodo && this.state.arrOfTodos.length >= 1 && (
          <AddTodo
            addTodo={this.state.addTodo}
            arrOfTodos={this.state.arrOfTodos}
            state={this.state}
            setState = {this.setState}
          />
        )}
      </div>
    );
  }
}
