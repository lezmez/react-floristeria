import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = '488af23542bdfd55774b77748c11ceee'; 
  const CITY = 'San gil, Santander, Colombia';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeatherData();
  }, [API_KEY, CITY]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather">
      <h2>Weather in {CITY}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].main}</p>
      <p2>☀️🌤️⛅🌦️🌧️⛈️🌩️🌨️🌪️🌕🌘🌙</p2>
    </div>
  );
};

export default Weather;
