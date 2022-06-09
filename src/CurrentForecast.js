import React from "react";
import "./CurrentForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentForecast({ data, city }) {
  return (
    <div className="box city">
      <div className="row">
        <div className="col-3 current-icon">
          <WeatherIcon code={data.icon} />
        </div>

        <div className="col-9 current">
          <span className="temp">{Math.round(data.temperature)}</span>
          <a href="/" className="c-temp active">
            {" "}
            °C
          </a>{" "}
          <span> | </span>
          <a href="/" className="f-temp">
            {" "}
            °F
          </a>
          <div className="description">{data.description}</div>
          <div className="wind-speed">Wind: {data.wind} km/h</div>
          <span className="city-name">{data.city}</span>
        </div>
      </div>
    </div>
  );
}
