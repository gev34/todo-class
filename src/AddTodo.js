import React from "react";

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.arrOfTodos.map((todo , index) => {
          return (
            <div key={todo + index}>
              <input type = 'checkbox'/>
            {todo.todo}
            <button onClick={() => {
            this.props.onClick( this.props.state.arrOfTodos.filter((todos) => todos.id !== todo.id))       
            }}>x</button>
          </div>
          )
          
        })}
      </div>
    );
  }
}