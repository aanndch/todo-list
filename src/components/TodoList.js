import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import ProgressBar from "react-bootstrap/ProgressBar";

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

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
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
      <div id="todoCard">
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <ProgressBar now={60} />
        <div>
          Todos left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow("All")}> All </button>
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
