import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurrentForecast from "./CurrentForecast";
import CurrentDate from "./CurrentDate";
import CurrentLoc from "./CurrentLoc";

export default function Search() {
  const [city, setCity] = useState("Bangkok");
  const [weatherData, setWeatherData] = useState(null);
  const [called, setCalled] = useState(false);
  const [error, setError] = useState("");

  const form = (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="search"
          name="city"
          placeholder="Enter a city.."
          autoComplete="off"
          autoFocus
          onChange={handleCityChange}
        />
      </form>
    </div>
  );

  function handleSuccess(response) {
    // check if this is the first API call
    // set to true as it has been called
    if (!called) {
      setCalled(true);
    }
    // clean up the error message
    if (error) {
      setError("");
    }
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    connect();
  }

  function handleCityChange(event) {
    setCity(event.target.value.toLowerCase());
  }

  function connect() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f33d05dcaa068a4dd766639aa37be9b8&units=metric`;
    axios
      .get(url)
      .then(handleSuccess)
      .catch(() => setError(`"${city}" cannot be found`));
  }

  if (called) {
    return (
      <div>
        {form}
        <CurrentLoc />
        {error ? (
          <div className="box">{error}</div>
        ) : (
          <CurrentForecast data={weatherData} city={city} />
        )}
        <CurrentDate data={weatherData} />
      </div>
    );
  } else {
    connect();
    return form;
  }
}
