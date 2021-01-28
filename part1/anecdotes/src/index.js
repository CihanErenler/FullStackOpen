import React, { useState } from "react";
import ReactDOM from "react-dom";

// Button component
const Button = ({ text, onclick }) => {
  return <button onClick={onclick}>{text}</button>;
};

// Anecdote with the most votes component
const AnecdoteMost = ({ most }) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[most]}</p>
    </div>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    new Array(anecdotes.length + 1).join("0").split("").map(parseFloat)
  );

  // Next anectod event handler
  const randomNum = () => {
    let newNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(newNum);
  };

  //Vote event handler
  const vote = () => {
    let newErr = [...votes];
    newErr[selected] += 1;
    setVotes(newErr);
  };

  //Return most voted anecdot's index
  const mostVotes = () => {
    let max = votes[0];
    let maxIndex = 0;

    let i;
    for (i = 0; i < votes.length; i++) {
      if (votes[i] > max) {
        max = votes[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button text="vote" onclick={vote} />
      <Button text="next anecdot" onclick={randomNum} />
      <AnecdoteMost most={mostVotes()} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
