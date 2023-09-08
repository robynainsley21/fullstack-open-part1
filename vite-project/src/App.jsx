import { useState } from "react";
import React from "react";

const Home = (props) => {
  return <p>My name its {props.name}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  // components
  const Header = (props) => {
    return <h1>{props.course} </h1>;
  };

  const Content = (props) => {
    return (
      <>
        <p>{props.part[0].name} {props.part[0].exercises}</p>
        <p>{props.part[1].name} {props.part[1].exercises}</p>
        <p>{props.part[2].name} {props.part[2].exercises}</p>

      </>
    );
  };

  const Total = (props) => {
    return (
      <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
    )
  }



  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts} />
      <Total part={course.parts}/>
    </div>
  );
};
export default App;
