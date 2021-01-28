import React from "react";
import ReactDOM from "react-dom";

// Header Component
const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

// Part Component
const Part = (props) => {
  const { name, exercise } = props;

  return (
    <p>
      {name} {exercise}
    </p>
  );
};

// Content Component
const Content = (props) => {
  const { parts } = props;
  return (
    <>
      <Part name={parts[0].name} exercise={parts[0].exercise} />
      <Part name={parts[1].name} exercise={parts[1].exercise} />
      <Part name={parts[2].name} exercise={parts[2].exercise} />
    </>
  );
};

// Total Component
const Total = (props) => {
  const { parts } = props;
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercise + parts[1].exercise + parts[2].exercise}
    </p>
  );
};

const App = () => {
  // Course data
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
      },
      {
        name: "State of a component",
        exercise: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
