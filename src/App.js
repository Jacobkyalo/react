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

function Hello(props) {
  return <div>Hello {props.name}</div>;
}

function App() {
  return (
    <div className="app">
      <Hello name="Jack" />
      <User sibling="Paul" />
      <Clock />
      <Events />
      <Conditionals isLoggedIn={true} />
      <Login />
    </div>
  );
}

export default App;
