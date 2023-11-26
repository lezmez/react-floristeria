import React, { useState, useEffect } from 'react';
import './Weather.css';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = '488af23542bdfd55774b77748c11ceee';
  const DEFAULT_CITY = 'San Gil, Santander, Colombia';

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchLocalWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(response.data);
          } catch (error) {
            setError(error.message);
          }
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const fetchDefaultWeather = () => {
    fetchWeatherData(DEFAULT_CITY);
  };

  useEffect(() => {
    fetchWeatherData(DEFAULT_CITY);
  }, [API_KEY, DEFAULT_CITY]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather">
      <h2>Weather in 📌{weatherData.name}, {weatherData.sys.country} 🗺️</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].main}</p>
      <p2>☀️🌤️🌦️🌧️⛈️🌩️🌨️🌪️🌘🌙</p2>

      <button onClick={fetchDefaultWeather}>Default Weather</button>
      <button onClick={fetchLocalWeather}>Local Weather</button>
    </div>
  );
};

export default Weather;