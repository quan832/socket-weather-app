import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { APP_TOKEN, weatherOptions } from "../../../util/appUtil";

export default function ExtendedForecast({ match, socket }) {
  // data
  const { isFetching, weathers } = useSelector((state) => state.weatherState);

  const renderDayWeatherItem = () => {
    return weathers.map((item, index) => {
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
                `/src/assets/img/weather/icon-${item.typeIcon}.png`
              }
            />
          </div>
          <div className="wethear-now">
            <div className="temperature-sensor">{item.avrTemperature}</div>
            <div className="max-min-temperature">
              <span>55°</span>
              <span className="high">69°</span>
            </div>
          </div>
        </div>
      );
    });
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
              renderDayWeatherItem()
            ) : (
              <h1 style={{ textAlign: "center", paddingTop: "100px" }}>
                Select Day to show
              </h1>
            )}
          </div>
          <div
            className="swiper-slide swiper-slide-weather"
            data-swiper-parallax={-500}
          >
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Tomorrow</div>
              <svg className="olymp-weather-sunny-icon icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-sunny-icon" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">60°</div>
                <div className="max-min-temperature">
                  <span>55°</span>
                  <span className="high">69°</span>
                </div>
              </div>
            </div>
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Monday 28</div>
              <svg className="olymp-weather-wind-icon-header icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-wind-icon-header" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">58°</div>
                <div className="max-min-temperature">
                  <span>52°</span>
                  <span className="high">64°</span>
                </div>
              </div>
            </div>
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Tuesday 29</div>
              <svg className="olymp-weather-cloudy-icon icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-cloudy-icon" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">67°</div>
                <div className="max-min-temperature">
                  <span>62°</span>
                  <span className="high">77°</span>
                </div>
              </div>
            </div>
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Wednesday 30</div>
              <svg className="olymp-weather-rain-icon icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-rain-icon" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">70°</div>
                <div className="max-min-temperature">
                  <span>65°</span>
                  <span className="high">82°</span>
                </div>
              </div>
            </div>
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Thursday 31</div>
              <svg className="olymp-weather-storm-icon icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-storm-icon" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">73°</div>
                <div className="max-min-temperature">
                  <span>68°</span>
                  <span className="high">79°</span>
                </div>
              </div>
            </div>
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Friday 1</div>
              <svg className="olymp-weather-snow-icon icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-snow-icon" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">68°</div>
                <div className="max-min-temperature">
                  <span>56°</span>
                  <span className="high">69°</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-weather"
            data-swiper-parallax={-500}
          >
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Tomorrow</div>
              <svg className="olymp-weather-sunny-icon icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-sunny-icon" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">60°</div>
                <div className="max-min-temperature">
                  <span>55°</span>
                  <span className="high">69°</span>
                </div>
              </div>
            </div>
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Monday 28</div>
              <svg className="olymp-weather-wind-icon-header icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-wind-icon-header" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">58°</div>
                <div className="max-min-temperature">
                  <span>52°</span>
                  <span className="high">64°</span>
                </div>
              </div>
            </div>
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Tuesday 29</div>
              <svg className="olymp-weather-cloudy-icon icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-cloudy-icon" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">67°</div>
                <div className="max-min-temperature">
                  <span>62°</span>
                  <span className="high">77°</span>
                </div>
              </div>
            </div>
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Wednesday 30</div>
              <svg className="olymp-weather-rain-icon icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-rain-icon" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">70°</div>
                <div className="max-min-temperature">
                  <span>65°</span>
                  <span className="high">82°</span>
                </div>
              </div>
            </div>
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Thursday 31</div>
              <svg className="olymp-weather-storm-icon icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-storm-icon" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">73°</div>
                <div className="max-min-temperature">
                  <span>68°</span>
                  <span className="high">79°</span>
                </div>
              </div>
            </div>
            <div className="day-wethear-item" data-mh="wethear-item">
              <div className="title">Friday 1</div>
              <svg className="olymp-weather-snow-icon icon">
                <use xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-snow-icon" />
              </svg>
              <div className="wethear-now">
                <div className="temperature-sensor">68°</div>
                <div className="max-min-temperature">
                  <span>56°</span>
                  <span className="high">69°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* If we need pagination */}
        <div className="swiper-pagination pagination-blue" />
      </div>
      {/* ... end Slider Weather */}
    </div>
  );
}
