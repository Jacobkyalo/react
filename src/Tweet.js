import React from "react";

function Tweet({ name, msg, likes }) {
  return (
    <div className="tweet">
      <h2 style={{ fontSize: 30 }}>{name}</h2>
      <p style={{ fontSize: 20 }}>{msg}</p>
      <h3>{likes}</h3>
    </div>
  );
}

export default Tweet;
