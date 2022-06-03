import React from "react";
import "./CurrentForecast.css";

export default function CurrentForecast({
  description,
  wind,
  temperature,
  city,
  icon,
}) {
  return (
    <div className="box city">
      <div className="row">
        <div className="col-3">
          <img className="current-img" alt="weather" src={icon} />
        </div>

        <div className="col-9 current">
          <span className="temp">{Math.round(temperature)}</span>
          <a href="/" className="c-temp active">
            {" "}
            °C
          </a>{" "}
          <span> | </span>
          <a href="/" className="f-temp">
            {" "}
            °F
          </a>
          <div className="description">{description}</div>
          <div className="wind-speed">Wind: {wind} km/h</div>
          <span className="city-name">{city}</span>
        </div>
      </div>
    </div>
  );
}
