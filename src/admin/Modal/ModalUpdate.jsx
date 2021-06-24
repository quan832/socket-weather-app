import React from "react";
import _ from "lodash";
import makeToast from "../../Toaster";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  FETCH_ALL_WEATHERS,
  FORMAT_DATE,
  FORMAT_DATE_TIME,
  FORMAT_TIME,
} from "../../util/appUtil";
import moment from "moment";

export default function ModalUpdate({ socket, name, item }) {
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

    axios
      .put(`http://localhost:8000/weather/${item._id}`, {
        cityName,
        avrTemperature,
        highTemperature,
        lowTemperature,
        typeIcon,
        content,
      })
      .then((res) => {
        makeToast("success", `Update ${cityName} weather successfully`);

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
      id={`update${item._id}`}
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
            <h6 className="title" style={{ textTransform: "capitalize" }}>
              {name} city weather
            </h6>
          </div>
          <div className="modal-body">
            <div className="form-group label-floating">
              <label className="control-label">City Name</label>
              <input
                className="form-control"
                style={{ height: `calc(2.5em + .75rem + 2px)` }}
                placeholder
                defaultValue={item.cityName}
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
                defaultValue={item.avrTemperature}
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
                    defaultValue={item.highTemperature}
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
                    defaultValue={item.lowTemperature}
                    type="text"
                    ref={lowTempRef}
                  />
                </div>
              </div>
            </div>
            <div className="form-group date-time-picker label-floating">
              <label className="control-label">Weather Date</label>
              <input
                name="datetimepicker"
                defaultValue={moment.utc(item.dateTime).format(FORMAT_DATE)}
              />
              <span className="input-group-addon">
                <svg className="olymp-calendar-icon icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                </svg>
              </span>
            </div>
            <div className="row">
              <div className="col col-lg-5 col-md-3 col-sm-12 col-12">
                <div className="form-group label-floating">
                  <label className="control-label">Date Time</label>
                  <input
                    className="form-control"
                    style={{ height: `calc(2.5em + .75rem + 2px)` }}
                    placeholder
                    defaultValue={moment.utc(item.dateTime).format(FORMAT_TIME)}
                    type="text"
                  />
                </div>
              </div>
              <div className="col col-lg-7 col-md-6 col-sm-12 col-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Forecast</label>
                  <select
                    className="selectpicker form-control"
                    style={{
                      height: `calc(2.5em + .75rem + 2px)`,
                      textTransform: "capitalize",
                    }}
                    ref={typeRef}
                    defaultValue={item.typeIcon}
                  >
                    <option value="sunny">Sunny</option>
                    <option value="rain">Rain </option>
                    <option value="snow">Snow</option>
                    <option value="cloud">cloud</option>
                    <option value="moon">moon</option>
                    <option value="night">night</option>
                    <option value="wind">wind</option>
                    <option value="thunder">thunder</option>
                    <option value="dry">dry</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group label-floating">
              <label className="control-label">More Data</label>
              <textarea
                className="form-control"
                placeholder
                defaultValue={item.content}
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
