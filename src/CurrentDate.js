import React from "react";
import "./CurrentDate.css";

export default function CurrentDate({ data }) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[data.date.getDay()];
  let hours = data.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = data.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="box date">
      <span className="date-time">
        {day} {hours}:{minutes}
      </span>
    </div>
  );
}
