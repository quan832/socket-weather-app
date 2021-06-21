import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { APP_TOKEN, FETCH_ALL_WEATHERS } from "../../../util/appUtil";

export default function Input({ socket }) {
  const dispatch = useDispatch();

  const fetchWeather = () => {
    // call action
    dispatch({ type: FETCH_ALL_WEATHERS });
  };

  const [button, setButton] = useState(false);
  const [allWeather, setAllWeather] = [];
  const [userId, setUserId] = React.useState("");

  useEffect(() => {
    console.log(socket);
    const token = localStorage.getItem(APP_TOKEN);

    if (socket || button === true) {

      socket.emit("getAllWeather", { token });

      socket.on("newAllWeathers", (message) => {
        console.log(message);
        debugger;
      });
    }
  }, [button]);

  console.log(allWeather);
  console.log(button);
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Widget Preview</h6>
      </div>
      <div className="ui-block-content">
        {/* Form Weather */}
        <form>
          <div className="row">
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <fieldset className="form-group label-floating is-select">
                <label className="control-label">Extended Forecast Days</label>
                <select
                  className="selectpicker form-control"
                  style={{ paddingTop: "40px" }}
                >
                  <option value="AL">Show Next 7 days</option>
                  <option value={2}>Show Next 10 days</option>
                  <option value="WY">Show Next 14 days</option>
                </select>
              </fieldset>

              <a href="#" className="btn btn-secondary btn-md full-width">
                Restore all Attributes
              </a>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="switcher-block" style={{ marginTop: "15px" }}>
                <div className="h6 title">Show all City forecast on Widget</div>
                <div className="togglebutton blue">
                  <label>
                    <input type="checkbox" defaultChecked />
                    <span className="toggle" />
                  </label>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // fetchWeather();
                  setButton(!button);
                }}
                className="btn btn-blue btn-md full-width"
              >
                Save all Changes
              </button>
            </div>
          </div>
        </form>
        {/* ... end Form Weather */}
      </div>
    </div>
  );
}
