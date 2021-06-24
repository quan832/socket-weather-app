import React from "react";
import _ from "lodash";
import makeToast from "../../Toaster";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FETCH_ALL_WEATHERS } from "../../util/appUtil";

export default function ModalCreate({ socket, name }) {
  const cityNameRef = React.createRef();
  const avrTemp = React.createRef();
  const typeRef = React.createRef();
  const contentRef = React.createRef();
  const highTempRef = React.createRef();
  const lowTempRef = React.createRef();

  const dispatch = useDispatch();

  const handleClick = _.debounce(function () {
    // city weather
    const cityName = cityNameRef.current.value;
    const avrTemperature = avrTemp.current.value;
    const typeIcon = typeRef.current.value;
    const content = contentRef.current.value;
    const highTemperature = highTempRef.current.value;
    const lowTemperature = lowTempRef.current.value;

    const data = null;

    axios
      .post("http://localhost:8000/weather", {
        cityName,
        avrTemperature,
        highTemperature,
        lowTemperature,
        typeIcon,
        content,
        data,
      })
      .then((res) => {
        makeToast("success", `Create ${cityName} weather successfully`);

        socket.emit("createCityWeather");

        socket.on("updateCityWeather", (weather) => {
          dispatch({ type: FETCH_ALL_WEATHERS, payload: weather });
        });
      })
      .catch((err) => {
        makeToast("error", err);
      });
  }, 500);

  return (
    <div
      className="modal fade"
      id={name}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="create-event"
      aria-hidden="true"
    >
      <div className="modal-dialog window-popup create-event" role="document">
        <div className="modal-content">
          <a
            href="#"
            className="close icon-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <svg className="olymp-close-icon">
              <use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon" />
            </svg>
          </a>
          <div className="modal-header">
            <h6 className="title">Create city weather</h6>
          </div>
          <div className="modal-body">
            <div className="form-group label-floating">
              <label className="control-label">City Name</label>
              <input
                className="form-control"
                style={{ height: `calc(2.5em + .75rem + 2px)` }}
                placeholder
                defaultValue="Ho Chi Minh City"
                type="text"
                ref={cityNameRef}
              />
            </div>
            <div className="form-group label-floating">
              <label className="control-label">Average Temperature</label>
              <input
                className="form-control"
                placeholder
                style={{ height: `calc(2.5em + .75rem + 2px)` }}
                defaultValue="30"
                type="text"
                ref={avrTemp}
              />
            </div>
            <div className="row">
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group label-floating">
                  <label className="control-label">High Temperature</label>
                  <input
                    className="form-control"
                    placeholder
                    style={{ height: `calc(2.5em + .75rem + 2px)` }}
                    defaultValue="30"
                    type="text"
                    ref={highTempRef}
                  />
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group label-floating">
                  <label className="control-label">Low Temperature</label>
                  <input
                    className="form-control"
                    placeholder
                    style={{ height: `calc(2.5em + .75rem + 2px)` }}
                    defaultValue="30"
                    type="text"
                    ref={lowTempRef}
                  />
                </div>
              </div>
            </div>
            <div className="form-group date-time-picker label-floating">
              <label className="control-label">Weather Date</label>
              <input name="datetimepicker" defaultValue="26/03/2016" />
              <span className="input-group-addon">
                <svg className="olymp-calendar-icon icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                </svg>
              </span>
            </div>
            <div className="row">
              <div className="col col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="form-group label-floating">
                  <label className="control-label">Date Time</label>
                  <input
                    className="form-control"
                    style={{ height: `calc(2.5em + .75rem + 2px)` }}
                    placeholder
                    defaultValue="09:00"
                    type="text"
                  />
                </div>
              </div>
              <div className="col col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">AM-PM</label>
                  <select
                    className="selectpicker form-control"
                    style={{ height: `calc(2.5em + .75rem + 2px)` }}
                  >
                    <option value="MA">AM</option>
                    <option value="FE">PM</option>
                  </select>
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Forecast</label>
                  <select
                    className="selectpicker form-control"
                    style={{ height: `calc(2.5em + .75rem + 2px)` }}
                    ref={typeRef}
                  >
                    <option value="sunny">Sunny</option>
                    <option value="rain">Rain </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group label-floating">
              <label className="control-label">More Data</label>
              <textarea
                className="form-control"
                placeholder
                defaultValue={
                  "The weather today is so much wind, credentials should stay at home to safe. We will notify you in the future  \n"
                }
                ref={contentRef}
              />
            </div>
            <button
              className="btn btn-breez btn-lg full-width"
              onClick={handleClick}
              style={{ textTransform: "capitalize" }}
            >
              {name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
