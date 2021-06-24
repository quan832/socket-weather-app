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
            <h6 className="title">Create an Event</h6>
          </div>
          <div className="modal-body">
            <div className="form-group label-floating is-select">
              <label className="control-label">Personal Event</label>
              <select className="selectpicker form-control">
                <option value="MA">Private Event</option>
                <option value="FE">Personal Event</option>
              </select>
            </div>
            <div className="form-group label-floating">
              <label className="control-label">Event Name</label>
              <input
                className="form-control"
                placeholder
                defaultValue="Take Querty to the Veterinarian"
                type="text"
              />
            </div>
            <div className="form-group label-floating is-empty">
              <label className="control-label">Event Location</label>
              <input
                className="form-control"
                placeholder
                defaultValue
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
                  <label className="control-label">Event Time</label>
                  <input
                    className="form-control"
                    placeholder
                    defaultValue="09:00"
                    type="text"
                  />
                </div>
              </div>
              <div className="col col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">AM-PM</label>
                  <select className="selectpicker form-control">
                    <option value="MA">AM</option>
                    <option value="FE">PM</option>
                  </select>
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Timezone</label>
                  <select className="selectpicker form-control">
                    <option value="MA">US (UTC-8)</option>
                    <option value="FE">UK (UTC-0)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group label-floating">
              <label className="control-label">Event Description</label>
              <textarea
                className="form-control"
                placeholder
                defaultValue={
                  "I need to take Querty for a check up and ask the doctor if he needs a new tank.\n              "
                }
              />
            </div>
            <form className="form-group label-floating is-select">
              <svg className="olymp-happy-face-icon">
                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
              </svg>
              <select
                className="selectpicker form-control style-2 show-tick"
                multiple
                data-live-search="true"
              >
                <option
                  title="Green Goo Rock"
                  data-content='<div class="inline-items">
                  <div class="author-thumb">
                    <img src="img/avatar52-sm.jpg" alt="author">
                  </div>
                    <div class="h6 author-title">Green Goo Rock</div>
    
                  </div>'
                >
                  Green Goo Rock
                </option>
                <option
                  title="Mathilda Brinker"
                  data-content='<div class="inline-items">
                    <div class="author-thumb">
                      <img src="img/avatar74-sm.jpg" alt="author">
                    </div>
                    <div class="h6 author-title">Mathilda Brinker</div>
                  </div>'
                >
                  Mathilda Brinker
                </option>
                <option
                  title="Marina Valentine"
                  data-content='<div class="inline-items">
                    <div class="author-thumb">
                      <img src="img/avatar48-sm.jpg" alt="author">
                    </div>
                    <div class="h6 author-title">Marina Valentine</div>
                  </div>'
                >
                  Marina Valentine
                </option>
                <option
                  title="Dave Marinara"
                  data-content='<div class="inline-items">
                    <div class="author-thumb">
                      <img src="img/avatar75-sm.jpg" alt="author">
                    </div>
                    <div class="h6 author-title">Dave Marinara</div>
                  </div>'
                >
                  Dave Marinara
                </option>
                <option
                  title="Rachel Howlett"
                  data-content='<div class="inline-items">
                    <div class="author-thumb">
                      <img src="img/avatar76-sm.jpg" alt="author">
                    </div>
                    <div class="h6 author-title">Rachel Howlett</div>
                  </div>'
                >
                  Rachel Howlett
                </option>
              </select>
            </form>
            <button className="btn btn-breez btn-lg full-width">
              Create Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
