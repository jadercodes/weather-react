import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature({ celsius }) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function getFahrenheit() {
    return (celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temp">{Math.round(celsius)}</span>
        <a href="/" className="c-temp active" onClick={showCelsius}>
          {" "}
          °C
        </a>{" "}
        <span> | </span>
        <a href="/" className="f-temp" onClick={showFahrenheit}>
          {" "}
          °F
        </a>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temp">{Math.round(getFahrenheit())}</span>
        <a href="/" className="c-temp" onClick={showCelsius}>
          {" "}
          °C
        </a>{" "}
        <span> | </span>
        <a href="/" className="f-temp active" onClick={showFahrenheit}>
          {" "}
          °F
        </a>
      </span>
    );
  }
}
