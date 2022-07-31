import "./styles.css";
import React, { useState } from "react";
import axios from "axios";

export default function Forecast() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState("");

  function showForecast(response) {
    setForecast(
      <ul className="forecast">
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}km/h</li>
        <li>
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />{" "}
        </li>
      </ul>
    );
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `0344856308dba07dc224ef8fed688680`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
  }
  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      <div className="forecast">{forecast}</div>
    </div>
  );
}
