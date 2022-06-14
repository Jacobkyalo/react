import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "today" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("Form was submitted " + this.state.value);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="Form">
        <div>
          <form action="#" onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              Name:
              <input type="text" value={this.state.value} />
            </label>
            <input type="submit" value="Submit" onChange={this.handleChange} />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
