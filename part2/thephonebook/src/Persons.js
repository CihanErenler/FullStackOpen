import React from "react";

const Persons = ({ result, handledelete }) => {
  return (
    <table>
      <tbody>
        {result.map((person) => {
          const { name, number } = person;
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{number}</td>
              <td>
                <button onClick={() => handledelete(person.id, name)}>
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Persons;
