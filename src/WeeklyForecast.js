import React from "react";
import "./WeeklyForecast.css";

export default function WeeklyForecast() {
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
