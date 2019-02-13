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
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangeLanguage(event) {
    this.setState({ language: event.target.value });
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
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Essay:
          <textarea
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
        </label>
        <label>
          Pick your favorite language:
          <select
            value={this.state.language}
            onChange={this.handleChangeLanguage}
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
