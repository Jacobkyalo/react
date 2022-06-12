import React from "react";

function Events() {
  const validate = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div>
      <form onSubmit={validate}>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => console.log("hello")}>Log</button>
    </div>
  );
}

export default Events;
