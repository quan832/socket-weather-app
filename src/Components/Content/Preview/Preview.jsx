import React from "react";
import ThreeDot from "../../../assets/svg-icons/three-dots-icon.svg?component";
import CloudyIcon from "../../../assets/svg-icons/sprites/icons-weather-sunny.svg?component";
import { useSelector } from "react-redux";

import moment from "moment";
import { FORMAT_DATE } from "../../../util/appUtil";

export default function Preview() {
  const cityWeather = useSelector((state) => state.weatherState.cityWeather);

  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Widget Preview</h6>
      </div>
      {/* W-Weather */}
      <div className="widget w-wethear">
        <a href="#" className="more">
          <ThreeDot />
        </a>
        <div className="wethear-now inline-items">
          <div className="temperature-sensor">
            {cityWeather.avrTemperature}°
          </div>
          <div className="max-min-temperature">
            <span>{cityWeather.lowTemperature}°</span>
            <span>{cityWeather.highTemperature}°</span>
          </div>
          <CloudyIcon />
        </div>
        <div className="wethear-now-description">
          <div className="climate">Partly {cityWeather.typeIcon}</div>
          <span>
            Real Feel: <span>{cityWeather.feelTemperature}°</span>
          </span>
          <span>
            Chance of Rain: <span>{cityWeather.rainChance}%</span>
          </span>
        </div>
        <div className="date-and-place">
          <h5 className="date mb-1">
            {moment.utc(cityWeather.date).format(FORMAT_DATE)}
          </h5>
          <div className="place" style={{ fontSize: "15px" }}>
            {cityWeather.cityName}
          </div>
        </div>
      </div>
      {/* W-Weather */}
    </div>
  );
}
