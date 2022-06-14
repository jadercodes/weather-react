import axios from "axios";
import React from "react";
import "./WeeklyForecast.css";

export default function WeeklyForecast({ coordinates }) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let longitude = coordinates.lon;
  let latitude = coordinates.lat;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=f33d05dcaa068a4dd766639aa37be9b8&units=metric`;

  axios.get(url).then(handleResponse);

  return (
    <div className="box week">
      <div className="row">
        <div className="col-4">
          Sun <div>30 °C</div>
          <div>
            <img
              className="forecast-img"
              alt="weather"
              src="https://openweathermap.org/img/wn/10d@2x.png"
            />
          </div>
        </div>
        <div className="col-4">
          Mon <div>29 °C</div>
          <div>
            <img
              className="forecast-img"
              alt="weather"
              src="https://openweathermap.org/img/wn/10d@2x.png"
            />
          </div>
        </div>
        <div className="col-4">
          Tue <div>26 °C</div>
          <div>
            <img
              className="forecast-img"
              alt="weather"
              src="https://openweathermap.org/img/wn/10d@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          Wed <div>33 °C</div>
          <div>
            <img
              className="forecast-img"
              alt="weather"
              src="https://openweathermap.org/img/wn/10d@2x.png"
            />
          </div>
        </div>
        <div className="col-4">
          Thu <div>30 °C</div>
          <div>
            <img
              className="forecast-img"
              alt="weather"
              src="https://openweathermap.org/img/wn/10d@2x.png"
            />
          </div>
        </div>
        <div className="col-4">
          Fri <div>29 °C</div>
          <div>
            <img
              className="forecast-img"
              alt="weather"
              src="https://openweathermap.org/img/wn/10d@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
