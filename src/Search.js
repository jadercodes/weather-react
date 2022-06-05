import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurrentForecast from "./CurrentForecast";

export default function Search() {
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

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
        />
      </form>
    </div>
  );

  function showWeather(response) {
    setLoaded(true);
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const submitCity = event.target.elements.city.value.toLowerCase();
    setCity(submitCity);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${submitCity}&appid=f33d05dcaa068a4dd766639aa37be9b8&units=metric`;
    axios.get(url).then(showWeather).catch(handleError);
  }

  function handleError() {
    setLoaded(false);
  }

  if (loaded) {
    return (
      <div>
        {form}
        <CurrentForecast data={weatherData} city={city} />
      </div>
    );
  } else {
    return form;
  }
}
