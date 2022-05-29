import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [loaded, setLoaded] = useState(false);

  let form = (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="search" name="city" placeholder="Enter a city.." />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  function showWeather(response) {
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const submitCity = event.target.elements.city.value.toLowerCase();
    setCity(submitCity);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${submitCity}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showWeather).catch(handleError);
  }

  function handleError() {
    setLoaded(false);
  }

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li id="city-name">{city}</li>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <img src={icon} alt="icon" />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
