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
        {this.props.arrOfTodos.map((todo , index) => {
          return (
            <div key={todo + index}>
              <input type = 'checkbox'/>
            {todo.todo}
            <button onClick={() => {
              this.props.setState({arrOfTodos: ['ad']})
             // console.log(this.props.arrOfTodos);
           //  this.props.state.arrOfTodos = this.props.state.arrOfTodos.filter((todos) => todos !== todo)
           //  console.log(this.props.state.arrOfTodos)
            }}>x</button>
          </div>
          )
          
        })}
      </div>
    );
  }
}