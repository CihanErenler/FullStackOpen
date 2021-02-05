import React from "react";

function Input({ value, setinput }) {
  return <input type="text" value={value} onChange={setinput} />;
}

export default Input;
