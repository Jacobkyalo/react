import React from "react";

function User(props) {
  const person = {
    name: "Jacob",
    imgUrl: "https://picsum.photos/100",
    age: 20,
    theDate: new Date(),
  };

  const getYearOfBirth = (person) => {
    return person.theDate.getFullYear() - person.age;
  };
  return (
    <div>
      <div className="user-profile">
        <h2>{person.name}</h2>
        <img src={person.imgUrl} alt={person.name} />
      </div>
      <div className="age">
        <h2>{person.age}</h2>
      </div>
      <div className="user-footer">
        <h4>The year I was born is : {getYearOfBirth(person)}</h4>
      </div>
      <div>
        <h5>{props.sibling}</h5>
      </div>
    </div>
  );
}

export default User;
