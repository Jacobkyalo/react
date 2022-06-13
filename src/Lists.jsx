import React from "react";

function Lists(props) {
  const numbers = props.numbers;
  const multipliedNumbers = numbers.map((number) => (
    <li key={number}>{number * 3}</li>
  ));
  return (
    <div>
      <ul>{multipliedNumbers}</ul>
    </div>
  );
}

export default Lists;
