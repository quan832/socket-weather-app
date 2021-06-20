import React from "react";
import weatherBottom from "../../assets/img/weather-bottom.png";
import WeatherRefresh from "../../assets/svg-icons/weather-refresh-icon.svg?component";

export default function Carousel() {
  return (
    <div className="main-header main-header-weather">
      <div className="content-bg-wrap bg-weather" />
      <div className="date-and-place">
        <div className="date">Saturday, March 26th</div>
        <div className="place">San Francisco, CA</div>
      </div>
      <div className="wethear-update">
        Updated: 20/10 6:32pm
        <WeatherRefresh />
      </div>
      <div className="container">
        <div className="row">
          <div className="m-auto col-lg-4 col-md-8 col-sm-12 col-12">
            <div className="wethear-content">
              <div className="wethear-now">
                <svg className="olymp-weather-partly-sunny-icon icon">
                  <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-partly-sunny-icon" />
                </svg>
                <div className="temperature-sensor">64°F</div>
                <div className="max-min-temperature">
                  <span>Low: 58°</span>
                  <span>High: 76°</span>
                </div>
              </div>
              <div className="climate">Partly Sunny</div>
              <div className="wethear-now-description">
                <div>
                  <svg className="olymp-weather-thermometer-icon icon">
                    <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-thermometer-icon" />
                  </svg>
                  <div>Real Feel</div>
                  <span>67°</span>
                </div>
                <div>
                  <svg className="olymp-weather-rain-drops-icon icon">
                    <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-rain-drops-icon" />
                  </svg>
                  <div>Chance of Rain</div>
                  <span>5%</span>
                </div>
                <div>
                  <svg className="olymp-weather-wind-icon-header icon">
                    <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-wind-icon-header" />
                  </svg>
                  <div>Wind Speed</div>
                  <span>20MPH</span>
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
