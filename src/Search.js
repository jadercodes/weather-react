import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurrentForecast from "./CurrentForecast";

export default function Search() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [loaded, setLoaded] = useState(false);

  let form = (
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
      <CurrentForecast
        description={description}
        wind={wind}
        temperature={temperature}
        city={city}
        icon={icon}
      />
    </div>
  );

  function showWeather(response) {
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
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
    return form;
  } else {
    return form;
  }
}
