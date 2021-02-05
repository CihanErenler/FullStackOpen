import React from "react";

const PersonForm = ({
  newName,
  newNumber,
  handleName,
  handleNumber,
  handleOnSumbit,
}) => {
  return (
    <form onSubmit={handleOnSumbit}>
      <div>
        name: <input value={newName} onChange={handleName} />
      </div>
      <div>
        phone: <input value={newNumber} onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
