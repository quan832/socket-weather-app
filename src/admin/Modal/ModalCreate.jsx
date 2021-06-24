import React from "react";

export default function ModalCreate() {
  return (
    <div
      className="modal fade"
      id="create-event"
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
              />
            </div>
            <div className="form-group label-floating">
              <label className="control-label">Average Temperature</label>
              <input
                className="form-control"
                placeholder
                style={{ height: `calc(2.5em + .75rem + 2px)` }}
                defaultValue="Ho Chi Minh City"
                type="text"
              />
            </div>
            <div className="form-group date-time-picker label-floating">
              <label className="control-label">Event Date</label>
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
                  "The weather today is many wind, credentials should stay at home to safe. We will notify you in the future  \n"
                }
              />
            </div>
            <button className="btn btn-breez btn-lg full-width">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
