import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  APP_TOKEN,
  CLICK_BUTTON,
  CLICK_BUTTON_1,
  FETCH_ALL_WEATHERS,
} from "../../../util/appUtil";

import _ from "lodash";

export default function Input({ socket }) {
  const dispatch = useDispatch();

  const fetchWeather = _.debounce(() => {
    if (button) {
      dispatch({ type: CLICK_BUTTON, payload: button });
    } else {
      dispatch({ type: CLICK_BUTTON, payload: button });
    }
  }, 280);

  const [button, setButton] = useState(true);
  const [isCity, setIsCity] = useState("Show All City forecast on Widget");

  useEffect(() => {
    switch (button) {
      case true:
        return setIsCity("Show All City forecast on Widget");
      case false:
        return setIsCity("Get your Weather Date forecast on Widget");
    }
  });
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
                  style={{ height: `calc(2.5em + .75rem + 2px)` }}
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
                <div className="h6 title">{isCity}</div>
                <div className="togglebutton blue">
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      onClick={(e) => {
                        let temp = button;
                        setButton(!temp);
                      }}
                    />
                    <span className="toggle" />
                  </label>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  fetchWeather();
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
