import { useState } from "react";
import React from "react";

const Home = (props) => {
  return <p>My name its {props.name}</p>;
};

const App = () => {
  const now = new Date();

  const a = 10;
  const b = 20;
  const friends = [
    { name: "friend1", age: 28 },
    { name: "friend2", age: 18 },
  ];
  const array = ['one', 'two']

  return (
    <>
      <Home name={a} />
      <p>{friends[0].name}</p>
      <p>{array}</p>
    </>
  );
};
export default App;
