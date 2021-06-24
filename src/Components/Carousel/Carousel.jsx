import React from "react";
import { useSelector } from "react-redux";
import weatherBottom from "../../assets/img/weather-bottom.png";
import WeatherRefresh from "../../assets/svg-icons/weather-refresh-icon.svg?component";
import SunnyWeather from "../../assets/svg-icons/sprites/icons-weather-sunny.svg?component";

export default function Carousel() {
  const cityWeather = useSelector((state) => state.weatherState.cityWeather);

  return (
    <div className="main-header main-header-weather">
      <div className="content-bg-wrap bg-weather" />
      <div className="date-and-place">
        <div className="date">Saturday, March 26th</div>
        <div className="place">{cityWeather.cityName}</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="m-auto col-lg-4 col-md-8 col-sm-12 col-12">
            <div className="wethear-content">
              <div className="wethear-now">
                <SunnyWeather />
                <div className="temperature-sensor">
                  {cityWeather.avrTemperature}°C
                </div>
                <div className="max-min-temperature">
                  <span>Low: {cityWeather.lowTemperature}°</span>
                  <span>High: {cityWeather.highTemperature}°</span>
                </div>
              </div>
              <div className="climate" style={{ textTransform: "capitalize" }}>
                {cityWeather.typeIcon}
              </div>
              <div className="wethear-now-description">
                <div>
                  <svg className="olymp-weather-thermometer-icon icon">
                    <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-thermometer-icon" />
                  </svg>
                  <div>Real Feel</div>
                  <span>{cityWeather.feelTemperature}°</span>
                </div>
                <div>
                  <svg className="olymp-weather-rain-drops-icon icon">
                    <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-rain-drops-icon" />
                  </svg>
                  <div>Chance of Rain</div>
                  <span>{cityWeather.rainChance}%</span>
                </div>
                <div>
                  <svg className="olymp-weather-wind-icon-header icon">
                    <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-wind-icon-header" />
                  </svg>
                  <div>Wind Speed</div>
                  <span>{cityWeather.windSpeed}MPH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="img-bottom"
        // src="img/weather-bottom.png"
        src={weatherBottom}
        alt="friends"
      />
    </div>
  );
}
