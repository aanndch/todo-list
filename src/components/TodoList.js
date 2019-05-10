import React, { Component } from "react";
import TodoForm from "./TodoForm";

export default class TodoList extends Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => {
          return (
            <div>
              {todo.id}
              {todo.text}
            </div>
          );
        })}
      </div>
    );
  }
}
