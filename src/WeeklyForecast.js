import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeeklyForecast.css";
import WeeklyForecastDay from "./WeeklyForecastDay";

export default function WeeklyForecast({ coordinates }) {
  let [called, setCalled] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setCalled(false);
  }, [coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setCalled(true);
  }

  if (called) {
    return (
      <div className="box week">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 7) {
              return (
                <div className="col-4" key={index}>
                  <WeeklyForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let longitude = coordinates.lon;
    let latitude = coordinates.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=f33d05dcaa068a4dd766639aa37be9b8&units=metric`;

    axios.get(url).then(handleResponse);

    return null;
  }
}
