import React from "react";

export default function ListForecast() {
  return (
    <div className="tab-pane active" id="notifications" role="tabpanel">
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <table className="event-item-table event-item-table-fixed-width">
                <thead>
                  <tr>
                    <th className="author">CITY NAME</th>
                    <th className="location">AVERAGE TEMPERATURE</th>
                    <th className="upcoming">DATE</th>
                    <th className="description">FORECASTS</th>
                    <th className="users">CREATE_BY</th>
                    <th className="add-event"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="event-item">
                    <td className="author">
                      <div className="event-author inline-items">
                        <div className="author-thumb">
                          <img src="img/avatar62-sm.jpg" alt="author" />
                        </div>
                        <div className="author-date">
                          <a href="#" className="author-name h6">
                            Mathilda Brinker
                          </a>{" "}
                          invited you <br /> to an event{" "}
                          <a href="#">Reunion Dinner.</a>
                        </div>
                      </div>
                    </td>
                    <td className="location">
                      <div className="place inline-items">
                        <svg className="olymp-add-a-place-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-a-place-icon" />
                        </svg>
                        <span>Panucci Restaurant</span>
                      </div>
                    </td>
                    <td className="upcoming">
                      <div className="date-event inline-items align-left">
                        <svg className="olymp-small-calendar-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-calendar-icon" />
                        </svg>
                        <span className="month">Aug 14, 2016 at 7:00pm</span>
                      </div>
                    </td>
                    <td className="description">
                      <p className="description">
                        Hey! I thought we could all get together and grab
                        something to eat to remember old times!
                      </p>
                    </td>
                    <td className="users">
                      <ul className="friends-harmonic">
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic5.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic2.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="all-users bg-breez">
                            +24
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td className="add-event">
                      <a
                        href="20-CalendarAndEvents-MonthlyCalendar.html"
                        className="btn btn-breez btn-sm"
                      >
                        Add to Calendar
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-border-think custom-color c-grey"
                      >
                        Decline / Delete
                      </a>
                    </td>
                  </tr>
                  <tr className="event-item">
                    <td className="author">
                      <div className="event-author inline-items">
                        <div className="author-thumb">
                          <img src="img/avatar78-sm.jpg" alt="author" />
                        </div>
                        <div className="author-date">
                          <a href="#" className="author-name h6">
                            Walter Havock{" "}
                          </a>
                          invited you to <br /> an event{" "}
                          <a href="#">
                            {" "}
                            Daydreamz New <br /> Year’s Party.
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="location">
                      <div className="place inline-items">
                        <svg className="olymp-add-a-place-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-a-place-icon" />
                        </svg>
                        <span>Daydreamz Agency</span>
                      </div>
                    </td>
                    <td className="upcoming">
                      <div className="date-event inline-items align-left">
                        <svg className="olymp-small-calendar-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-calendar-icon" />
                        </svg>
                        <span className="month">Dec 29, 2016 at 7:00pm</span>
                      </div>
                    </td>
                    <td className="description">
                      <p className="description">
                        Let’s celebrate the new year together! We are organizing
                        a big party for all the agency...
                      </p>
                    </td>
                    <td className="users">
                      <ul className="friends-harmonic">
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic5.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend" />
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td className="add-event">
                      <a
                        href="20-CalendarAndEvents-MonthlyCalendar.html"
                        className="btn btn-breez btn-sm"
                      >
                        Add to Calendar
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-border-think custom-color c-grey"
                      >
                        Decline / Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
