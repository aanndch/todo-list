import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends Component {
  state = {
    todos: [],
    todosToShow: "All"
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateTodoToShow = s => {
    this.setState({
      todosToShow: s
    });
  };

  render() {
    let todos = [];

    if (this.state.todosToShow === "All") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "Active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todosToShow === "Complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          Todos left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow("All")}>All</button>
          <button onClick={() => this.updateTodoToShow("Active")}>
            Active
          </button>
          <button onClick={() => this.updateTodoToShow("Complete")}>
            Complete
          </button>
        </div>
      </div>
    );
  }
}
