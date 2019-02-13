import React, { Component } from "react";

export default class PortifolioCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      language: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.title +
        " " +
        this.state.description +
        " " +
        this.state.language
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Essay:
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Pick your favorite language:
          <select
            name="language"
            value={this.state.language}
            onChange={this.handleChange}
          >
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="c++">C++</option>
            <option value="c#">C#</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
