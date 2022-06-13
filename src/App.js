import React, { useState } from "react";
import "./App.css";
import Tweet from "./Tweet";
import Counter from "./Counter";
import Api from "./Api";
import User from "./User";
import Clock from "./Clock";
import Events from "./Events";
import Conditionals from "./Conditionals";
import Login from "./Login";
import Lists from "./Lists";

function Hello(props) {
  return <div>Hello {props.name}</div>;
}
const numbers = [1, 2, 3, 4, 5, 6];

function App() {
  return (
    <div className="app">
      <Hello name="Jack" />
      <User sibling="Paul" />
      <Clock />
      <Events />
      <Conditionals isLoggedIn={true} />
      <Login />
      <Lists numbers={numbers} />
    </div>
  );
}

export default App;
