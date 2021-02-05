import React from "react";

const Display = ({ country, show }) => {
  const { name } = country;
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => show(name)}>show</button>
    </div>
  );
};

export default Display;
