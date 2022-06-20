import React from "react";
import "./CurrentLoc.css";
import axios from "axios";

export default function CurrentLoc({ onUpdate }) {
  return (
    <button onClick={setCurrentLocation} className="CurrentLoc">
      Current Location
    </button>
  );

  function setCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCurrentWeather);
  }

  function getCurrentWeather(position) {
    let apiKey = "f33d05dcaa068a4dd766639aa37be9b8";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(onUpdate);
  }
}
