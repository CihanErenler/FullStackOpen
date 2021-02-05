import React from "react";
import Country from "./Country";
import Display from "./Display";
import Input from "./Input";

function Countries({ show, countries, value, setinput }) {
  if (countries.length === 1) {
    const [country] = countries;
    return (
      <div>
        find countries
        <Input value={value} setinput={setinput} />
        <Country country={country} />
      </div>
    );
  } else if (countries.length > 10) {
    return (
      <div>
        find countries
        <Input value={value} setinput={setinput} />
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }

  return (
    <div>
      find countries
      <Input value={value} setinput={setinput} />
      {countries.map((country) => {
        return (
          <Display key={country.alpha2Code} country={country} show={show} />
        );
      })}
    </div>
  );
}

export default Countries;
