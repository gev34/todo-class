import React from "react";

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   // this.props.addTodo = false;
   //console.log(this.props.arrOfTodos);
    return (
      <div>
        {this.props.arrOfTodos.map((todo) => {
          return (
            <div>
            {todo}
          </div>
          )
          
        })}
      </div>
    );
  }
}