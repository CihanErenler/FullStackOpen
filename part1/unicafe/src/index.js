import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onclick, text }) => {
  return <button onClick={onclick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

// Statistics
const Statistics = ({ value }) => {
  const { good, neutral, bad, total } = value;

  //Calculate average
  const average = () => {
    let averageVal = (good - bad) / total;
    return averageVal;
  };

  // Calculate positive
  const positive = () => {
    let per = (good / total) * 100;
    return per + "%";
  };

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={total} />
        <Statistic text="Average" value={average()} />
        <Statistic text="Positive" value={positive()} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const setToGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };
  const setToNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };
  const setToBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button onclick={setToGood} text="good" />
      <Button onclick={setToNeutral} text="neutral" />
      <Button onclick={setToBad} text="bad" />
      <h2>statistics</h2>
      <Statistics
        value={{ good: good, neutral: neutral, bad: bad, total: total }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
