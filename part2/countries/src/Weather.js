import React, { useState, useEffect } from "react";
import axios from "axios";
const key = process.env.REACT_APP_API_KEY;

const Weather = ({ name }) => {
  const [weather, setWeather] = useState({
    main: { temp: 25 },
    weather: [{ icon: "04n" }],
    wind: { speed: 5 },
  });

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${key}`
      )
      .then((response) => setWeather(response.data));
  }, [name]);

  return (
    <div>
      <h3>Weather in {name}</h3>
      <p>
        <b>temperature: </b>
        {Math.ceil(weather.main.temp)}°
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={name}
      />
      <p>
        <b>wind speed: </b>
        {weather.wind.speed}
      </p>
    </div>
  );
};

export default Weather;
