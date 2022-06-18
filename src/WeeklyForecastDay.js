import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeeklyForecastDay({ data }) {
  function temp() {
    let temp = Math.round(data.temp.day);
    return `${temp}°C`;
  }

  function day() {
    let date = new Date(data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weekly-forecast">
      <div>{day()}</div>
      <div>{temp()}</div>
      <div>
        <WeatherIcon code={data.weather[0].icon} />
      </div>
    </div>
  );
}
