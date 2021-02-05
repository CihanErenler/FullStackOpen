import React, { useState, useEffect } from "react";
import Persons from "./Persons";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import axios from "axios";
import services from "./services/numbers";
import Message from "./message";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState(false);
  const [success, setSuccess] = useState(true);

  const result = !filter
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase().trim())
      );

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const showMessage = (message) => {
    setMessage(message);
    setDisplay(true);

    setTimeout(() => {
      setMessage(null);
      setDisplay(false);
    }, 3000);
  };

  // Handle onSubmit
  const handleOnSumbit = (e) => {
    e.preventDefault();

    let isThere = persons.filter((person) => person.name === newName);

    if (isThere.length === 0) {
      const newPerson = {
        name: newName.trim(),
        number: newNumber.trim(),
      };

      services
        .create(newPerson)
        .then((response) => setPersons(persons.concat(response)));

      setSuccess(true);
      showMessage(`Person '${newName}' successfully added...`);

      setNewName("");
      setNewNumber("");
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with the new one?`
        )
      ) {
        const [oldPerson] = isThere;
        const newPerson = { ...oldPerson, number: newNumber };

        services.update(oldPerson.id, newPerson).then((response) => {
          setPersons(
            persons.map((person) => {
              return person.id !== response.id ? person : response;
            })
          );
        });

        setSuccess(true);
        setMessage(`${newPerson} succesfully updated...`);

        setNewName("");
        setNewNumber("");
      }
    }
  };

  // Handle deletes
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      services
        .deletePerson(id)
        .then((response) => {
          setPersons(persons.filter((person) => person.id !== id));
          showMessage(`${name} ${response}`);
        })
        .catch((error) => {
          showMessage("Person already deleted from server");
          setSuccess(false);
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {display && <Message info={message} success={success} />}
      <Filter value={filter} handleFilter={handleFilter} />
      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
        handleOnSumbit={handleOnSumbit}
      />
      <h3>Numbers</h3>
      <Persons result={result} handledelete={handleDelete} />
    </div>
  );
};

export default App;
