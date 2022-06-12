import React from "react";

function SignUp() {
  return (
    <div>
      <h1>Sign up please!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login to your Account</h1>
    </div>
  );
}

function Conditionals(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) return <Login />;
  return <SignUp />;
}

export default Conditionals;
