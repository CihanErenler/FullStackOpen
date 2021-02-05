import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");

  const filtered = input
    ? countries.filter((country) => {
        return country.name.toLowerCase().includes(input.toLowerCase().trim());
      })
    : [];

  const handleShow = (name) => {
    setInput(name);
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  return (
    <div>
      <Countries
        show={handleShow}
        countries={filtered}
        value={input}
        setinput={handleOnChange}
      />
    </div>
  );
}

export default App;
