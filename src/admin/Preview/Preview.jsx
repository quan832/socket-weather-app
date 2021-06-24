import React from "react";
import PlusIcon from "../../assets/svg-icons/plus-icon.svg?component";
export default function Preview() {
  return (
    <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
      <div className="ui-block">
        {/* Today Events */}
        <div className="today-events calendar">
          <div className="today-events-thumb">
            <div className="date">
              <div className="day-number">26</div>
              <div className="day-week">Saturday</div>
              <div className="month-year">March, 2016</div>
            </div>
          </div>
          <div className="list">
            <div className="control-block-button">
              <a
                href="#"
                className="btn btn-control bg-breez"
                data-toggle="modal"
                data-target="#create"
              >
                <PlusIcon />
              </a>
            </div>
            <div
              className="day-event"
              id="accordion-1"
              data-month={12}
              data-day={2}
              style={{ backgroundColor: "#FFF!important" }}
            >
              <div className="card">
                <div className="card-header" id="headingOne-1">
                  <div className="event-time">
                    <time dateTime="2004-07-24T18:18">9:00am</time>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                      <ul className="more-dropdown">
                        <li>
                          <a href="#">Mark as Completed</a>
                        </li>
                        <li>
                          <a href="#">Delete Event</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h5 className="mb-0 title">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseOne-1"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Breakfast at the Agency
                      <i className="fa fa-angle-down" aria-hidden="true" />
                      <span
                        className="event-status-icon"
                        data-toggle="modal"
                        data-target="#public-event"
                      >
                        <svg
                          className="olymp-calendar-icon"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="UNCOMPLETED"
                        >
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                        </svg>
                      </span>
                    </a>
                  </h5>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo-1">
                  <div className="event-time">
                    <time dateTime="2004-07-24T18:18">12:00pm</time>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                      <ul className="more-dropdown">
                        <li>
                          <a href="#">Mark as Completed</a>
                        </li>
                        <li>
                          <a href="#">Delete Event</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h5 className="mb-0 title">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseTwo-1"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Send the new “Olympus” project files to the Agency
                      <i className="fa fa-angle-down" aria-hidden="true" />
                      <span
                        className="event-status-icon"
                        data-toggle="modal"
                        data-target="#public-event"
                      >
                        <svg
                          className="olymp-calendar-icon"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="UNCOMPLETED"
                        >
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                        </svg>
                      </span>
                    </a>
                  </h5>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree-1">
                  <div className="event-time">
                    <time dateTime="2004-07-24T18:18">6:30pm</time>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                      </svg>
                      <ul className="more-dropdown">
                        <li>
                          <a href="#">Mark as Completed</a>
                        </li>
                        <li>
                          <a href="#">Delete Event</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h5 className="mb-0 title">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseThree-1"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Take Querty to the Veterinarian
                      <i className="fa fa-angle-down" aria-hidden="true" />
                      <span
                        className="event-status-icon"
                        data-toggle="modal"
                        data-target="#public-event"
                      >
                        <svg
                          className="olymp-calendar-icon"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="UNCOMPLETED"
                        >
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon" />
                        </svg>
                      </span>
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ... end Today Events */}
      </div>
    </div>
  );
}
