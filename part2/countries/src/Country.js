import React from "react";
import Weather from "./Weather";

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        <span>Capital: {country.capital}</span>
      </div>
      <div>
        <span>Population: {country.population}</span>
      </div>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language) => {
          return <li key={language.iso639_2}>{language.name}</li>;
        })}
      </ul>
      <img style={{ width: "150px" }} src={country.flag} alt={country.name} />
      <Weather name={country.name} />
    </div>
  );
};

export default Country;
