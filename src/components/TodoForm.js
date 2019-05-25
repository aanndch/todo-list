import React, { Component } from "react";
import shortid from "shortid";

export default class TodoForm extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.text === "") return;

    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div id="formCard">
        <form id="todoForm" onSubmit={this.handleSubmit}>
          <input
            id="todoInput"
            name="text"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Add New"
          />
          <button id="todoSubmit" type="Submit">
            <i className="fa fa-plus" />
          </button>
        </form>
      </div>
    );
  }
}
