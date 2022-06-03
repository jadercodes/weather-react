import React from "react";
import "./Background.css";

export default function Container() {
  return (
    <div className="Background">
      <img
        className="background-img"
        alt="background weather"
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/026/247/original/sky.jpg?1643806185"
      />
    </div>
  );
}
