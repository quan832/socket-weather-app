import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  APP_TOKEN,
  FORMAT_DATE_TIME,
  FORMAT_DATE_TIME2,
  FORMAT_TIME,
  weatherOptions,
} from "../../../util/appUtil";

export default function ExtendedForecast({ match, socket }) {
  // data
  const { isFetching, isButton, weathers, cityWeather } = useSelector(
    (state) => state.weatherState
  );

  const { data } = cityWeather;

  // render specific date
  const renderDateWeatherItem = () => {
    if (data === null)
      return (
        <div>
          <h3 className="text-warning p-5">Dont have nothing to display</h3>
        </div>
      );
    return data?.map((item, index) => {
      return (
        <div
          key={index}
          className="day-wethear-item"
          style={{ borderRight: "1px solid #e6ecf5" }}
          data-mh="wethear-item"
        >
          <div className="title">
            {moment.utc(item.cityName).format('MMMM D, h:mm A')}
          </div>
          <div
            style={{ width: "125px", height: "125px", objectFit: "contain" }}
          >
            <img
              style={{ width: "100%" }}
              src={
                window.location.origin +
                `/src/assets/img/icon_weather_2/${item.typeIcon}.png`
              }
            />
          </div>
          <div className="wethear-now">
            <div className="temperature-sensor">{item.avrTemperature}</div>
            <div className="max-min-temperature">
              <span>{item.lowTemperature}</span>
              <span className="high">{item.highTemperature}°</span>
            </div>
          </div>
        </div>
      );
    });
  };

  // render city weather forecast
  const renderDayWeatherItem = () => {
    if (weathers === null)
      return (
        <div>
          <h3 className="text-warning p-5">Dont have nothing to display</h3>
        </div>
      );
    return weathers?.map((item, index) => {
      return (
        <div
          key={index}
          className="day-wethear-item"
          style={{ borderRight: "1px solid #e6ecf5" }}
          data-mh="wethear-item"
        >
          <div className="title">{item.cityName}</div>
          <div
            style={{ width: "125px", height: "125px", objectFit: "contain" }}
          >
            <img
              style={{ width: "100%" }}
              src={
                window.location.origin +
                `/src/assets/img/icon_weather_2/${item.typeIcon}.png`
              }
            />
          </div>
          <div className="wethear-now">
            <div className="temperature-sensor">{item.avrTemperature}</div>
            <div className="max-min-temperature">
              <span>{item.lowTemperature}</span>
              <span className="high">{item.highTemperature}°</span>
            </div>
          </div>
        </div>
      );
    });
  };

  // render follow by button
  const renderIsButton = () => {
    if (isButton) {
      return renderDayWeatherItem();
    }
    return renderDateWeatherItem();
  };

  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Extended Forecast</h6>
      </div>
      {/* Slider Weather */}
      <div className="swiper-container pagination-bottom" data-slide="fade">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide swiper-slide-weather"
            data-swiper-parallax={-500}
          >
            {isFetching ? (
              renderIsButton()
            ) : (
              <h1 style={{ textAlign: "center", paddingTop: "100px" }}>
                Select Day to show
              </h1>
            )}
          </div>
        </div>
        {/* If we need pagination */}
        <div className="swiper-pagination pagination-blue" />
      </div>
      {/* ... end Slider Weather */}
    </div>
  );
}
