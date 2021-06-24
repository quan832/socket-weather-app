import React, { Fragment, useEffect, useState } from "react";
// import component
import Input from "./Input/Input";
import ExtendedForecast from "./Extened/ExtendedForecast";
import Preview from "./Preview/Preview";
import {
  APP_TOKEN,
  FETCH_ALL_WEATHERS,
  FETCH_CITY_WEATHER,
} from "../../util/appUtil";
import { useDispatch, useSelector } from "react-redux";
import makeToast from "../../Toaster";

export default function MainContent({ socket }) {
  const { isUpload, isButton } = useSelector((state) => state.weatherState);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(APP_TOKEN);

    if (socket && isUpload === true && isButton === true) {
      socket.emit("getAllWeather", { token });

      socket.on("newAllWeathers", (weather) => {
        dispatch({ type: FETCH_ALL_WEATHERS, payload: weather });
        makeToast("success", "Get weather forecast!");
      });
    }
    if (isButton === false && socket && isUpload === true) {
      const defaultName = "saigon";

      socket.emit("getCityWeather", defaultName);

      socket.on("newCityWeather", ({ data, userId }) => {
        if (data === null) {
          return makeToast("error", `Your city is not match!`);
        }
        makeToast("success", `Get ${data.cityName} weather forecast!`);
        return dispatch({ type: FETCH_CITY_WEATHER, payload: data });
      });

      socket.on("error", (err) => {
        makeToast("error", `${err}`);
      });
    }
  }, [isUpload, isButton]);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <Input socket={socket} />
            <ExtendedForecast socket={socket} />
          </div>
          <div className="col col-xl-3 order-xl-1 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12">
            <Preview />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
