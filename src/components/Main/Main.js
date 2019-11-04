import React from "react";
import "./Main.css";

const hours = new Date().getHours();
const isDayTime = hours > 6 && hours < 20;

const containerClass = [
  "main-container",
  "d-flex",
  "justify-content-center",
  "align-items-center"
];

if (isDayTime) {
  containerClass.push("day");
} else {
  containerClass.push("night");
}

const main = props => {
  return (
    <div className={containerClass.join(" ")}>
      <div className="jumbotron">
        <h1 className="display-8">{props.location}</h1>
        <h3 className="font-weight-bold">{props.currentTemp} °C</h3>
        <div className="weather-icon-container d-flex w-100">
          <img
            className="w-100"
            src={props.icon}
            alt={`weather icon ${props.description}`}
          ></img>
        </div>
        <p className="mb-4">{props.description}</p>
        <ul className="list-group">
          <li className="d-flex justify-content-around list-group-item">
            <div className="detail_container w-50">
              <img
                className="icon"
                src={require("../../assets/icons/min.svg")}
                alt="minimum temperature"
              />
              <p>{props.minTemp} °C</p>
            </div>
            <div className="detail_container w-50">
              <img
                className="icon"
                src={require("../../assets/icons/max.svg")}
                alt="maximum temperature"
              />
              <p>{props.maxTemp} °C</p>
            </div>
          </li>
          <li className="d-flex justify-content-around list-group-item">
            <div className="detail_container w-50">
              <img
                className="icon"
                src={require("../../assets/icons/wind.svg")}
                alt="wind speed"
              />
              <p>{props.windSpeed} km/h</p>
            </div>
            <div className="detail_container w-50">
              <img
                className="icon p-3"
                src={require("../../assets/icons/humidity.svg")}
                alt="humidity"
              />
              <p>{props.humidity} %</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default main;
