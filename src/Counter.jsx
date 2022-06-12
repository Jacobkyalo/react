import React, { Component } from "react";

class Counter extends Component {
  state = {
    lists: ["John", "Jack", "Collins", "Samuel"],
    count: 0,
  };
  // constructor() {
  //   super();
  //   console.log(constructor, this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  getNames() {
    if (this.state.lists.length === 0) return <p>Thera are no names!</p>;
    return (
      <ul>
        {this.state.lists.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <div>
          {this.state.lists.length === 0 && "please enter names"}
          <div>{this.getNames()}</div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
      </div>
    );
  }
}

export default Counter;
