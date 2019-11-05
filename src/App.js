import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("Berlin");
  const [query, setQuery] = useState("");
  const API_KEY = "857eccc47b7f5e9607d358b7c939390e";
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;

  const getWeatherData = async () => {
    try {
      const response = await axios.get(URL);
      setWeatherData(response.data);
      setCity("");
    } catch (error) {
      if (error.response.status === 404) {
        alert("Can't get data. Please check the entered city name");
        console.log(error);
      } else if (
        error.response.status === 500 ||
        error.response.status === 503
      ) {
        alert("Server currently not available. Please try later");
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  const getStateIcon = () => {
    return require(`./assets/weather_state_icons/${weatherData.weather[0].icon}.svg`);
  };

  const changeCityInputHandler = event => {
    setCity(event.target.value);
  };

  const newCityHandler = event => {
    event.preventDefault();
    setQuery(city);
  };

  useEffect(() => {
    getWeatherData();
  }, [query]);

  return (
    <div className="App">
      <Navbar
        cityInputChanged={changeCityInputHandler}
        getNewCity={newCityHandler}
        location={city}
      />
      {!weatherData ? (
        "Loading..."
      ) : (
        <Main
          location={weatherData.name}
          icon={getStateIcon()}
          currentTemp={weatherData.main.temp.toFixed(1)}
          description={weatherData.weather[0].description}
          minTemp={weatherData.main.temp_min.toFixed(1)}
          maxTemp={weatherData.main.temp_max.toFixed(1)}
          windSpeed={weatherData.wind.speed}
          humidity={weatherData.main.humidity}
        />
      )}
    </div>
  );
}

export default App;
