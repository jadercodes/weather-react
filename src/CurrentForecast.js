import React from "react";
import "./CurrentForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentForecast({ data }) {
  return (
    <div className="box city">
      <div className="row">
        <div className="col-3 current-icon">
          <WeatherIcon code={data.icon} />
        </div>

        <div className="col-9 current">
          <WeatherTemperature celsius={data.temperature} />
          <div className="description">{data.description}</div>
          <div className="wind-speed">Wind: {data.wind} km/h</div>
          <span className="city-name">{data.city}</span>
        </div>
      </div>
    </div>
  );
}
