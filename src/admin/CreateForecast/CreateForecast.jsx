import React from "react";
import PlusIcon from "../../assets/svg-icons/plus-icon.svg?component";


export default function CreateForecast() {
  return (
    <div className="tab-pane " id="events" role="tabpanel">
      <div className="container">
        <div className="row">
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
                      data-target="#create-event"
                    >
                      <PlusIcon />
                    </a>
                  </div>
                </div>
              </div>
              {/* ... end Today Events */}
            </div>
          </div>
          <div className="col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              {/* Full Calendar */}
              <div
                id="calendar"
                className="crumina-full-calendar fc fc-ltr fc-unthemed"
                style={{}}
              >
                <div className="fc-toolbar fc-header-toolbar">
                  <div className="fc-left">
                    <button
                      type="button"
                      className="fc-prev-button fc-button fc-button-primary"
                      aria-label="prev"
                    >
                      <span className="fc-icon fc-icon-far fa-chevron-left" />
                    </button>
                  </div>
                  <div className="fc-center">
                    <h2>May 2019</h2>
                  </div>
                  <div className="fc-right">
                    <div className="fc-button-group">
                      <button
                        type="button"
                        className="fc-next-button fc-button fc-button-primary"
                        aria-label="next"
                      >
                        <span className="fc-icon fc-icon-far fa-chevron-right" />
                      </button>
                      <button
                        type="button"
                        className="fc-dayGridMonth-button fc-button fc-button-primary fc-button-active"
                      >
                        {" "}
                      </button>
                      <button
                        type="button"
                        className="fc-timeGridWeek-button fc-button fc-button-primary"
                      >
                        {" "}
                      </button>
                      <button
                        type="button"
                        className="fc-timeGridDay-button fc-button fc-button-primary"
                      >
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="fc-view-container">
                  <div
                    className="fc-view fc-dayGridMonth-view fc-dayGrid-view"
                    style={{}}
                  >
                    <table className>
                      <thead className="fc-head">
                        <tr>
                          <td className="fc-head-container fc-widget-header">
                            <div className="fc-row fc-widget-header">
                              <table className>
                                <thead>
                                  <tr>
                                    <th className="fc-day-header fc-widget-header fc-sun">
                                      <span>Sun</span>
                                    </th>
                                    <th className="fc-day-header fc-widget-header fc-mon">
                                      <span>Mon</span>
                                    </th>
                                    <th className="fc-day-header fc-widget-header fc-tue">
                                      <span>Tue</span>
                                    </th>
                                    <th className="fc-day-header fc-widget-header fc-wed">
                                      <span>Wed</span>
                                    </th>
                                    <th className="fc-day-header fc-widget-header fc-thu">
                                      <span>Thu</span>
                                    </th>
                                    <th className="fc-day-header fc-widget-header fc-fri">
                                      <span>Fri</span>
                                    </th>
                                    <th className="fc-day-header fc-widget-header fc-sat">
                                      <span>Sat</span>
                                    </th>
                                  </tr>
                                </thead>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </thead>
                      <tbody className="fc-body">
                        <tr>
                          <td className="fc-widget-content">
                            <div
                              className="fc-scroller fc-day-grid-container"
                              style={{ overflow: "hidden", height: 582 }}
                            >
                              <div className="fc-day-grid">
                                <div
                                  className="fc-row fc-week fc-widget-content"
                                  style={{ height: "97.0469px" }}
                                >
                                  <div className="fc-bg">
                                    <table className>
                                      <tbody>
                                        <tr>
                                          <td
                                            className="fc-day fc-widget-content fc-sun fc-other-month fc-past"
                                            data-date="2019-04-28"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-mon fc-other-month fc-past"
                                            data-date="2019-04-29"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-tue fc-other-month fc-past"
                                            data-date="2019-04-30"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-wed fc-past"
                                            data-date="2019-05-01"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-thu fc-past"
                                            data-date="2019-05-02"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-fri fc-past"
                                            data-date="2019-05-03"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-sat fc-past"
                                            data-date="2019-05-04"
                                          />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="fc-content-skeleton">
                                    <table>
                                      <thead>
                                        <tr>
                                          <td
                                            className="fc-day-top fc-sun fc-other-month fc-past"
                                            data-date="2019-04-28"
                                          >
                                            <span className="fc-day-number">
                                              28
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-mon fc-other-month fc-past"
                                            data-date="2019-04-29"
                                          >
                                            <span className="fc-day-number">
                                              29
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-tue fc-other-month fc-past"
                                            data-date="2019-04-30"
                                          >
                                            <span className="fc-day-number">
                                              30
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-wed fc-past"
                                            data-date="2019-05-01"
                                          >
                                            <span className="fc-day-number">
                                              1
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-thu fc-past"
                                            data-date="2019-05-02"
                                          >
                                            <span className="fc-day-number">
                                              2
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-fri fc-past"
                                            data-date="2019-05-03"
                                          >
                                            <span className="fc-day-number">
                                              3
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-sat fc-past"
                                            data-date="2019-05-04"
                                          >
                                            <span className="fc-day-number">
                                              4
                                            </span>
                                          </td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div
                                  className="fc-row fc-week fc-widget-content"
                                  style={{ height: "96.75px" }}
                                >
                                  <div className="fc-bg">
                                    <table className>
                                      <tbody>
                                        <tr>
                                          <td
                                            className="fc-day fc-widget-content fc-sun fc-past"
                                            data-date="2019-05-05"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-mon fc-past"
                                            data-date="2019-05-06"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-tue fc-past"
                                            data-date="2019-05-07"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-wed fc-past"
                                            data-date="2019-05-08"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-thu fc-past"
                                            data-date="2019-05-09"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-fri fc-past"
                                            data-date="2019-05-10"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-sat fc-past"
                                            data-date="2019-05-11"
                                          />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="fc-content-skeleton">
                                    <table>
                                      <thead>
                                        <tr>
                                          <td
                                            className="fc-day-top fc-sun fc-past"
                                            data-date="2019-05-05"
                                          >
                                            <span className="fc-day-number">
                                              5
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-mon fc-past"
                                            data-date="2019-05-06"
                                          >
                                            <span className="fc-day-number">
                                              6
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-tue fc-past"
                                            data-date="2019-05-07"
                                          >
                                            <span className="fc-day-number">
                                              7
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-wed fc-past"
                                            data-date="2019-05-08"
                                          >
                                            <span className="fc-day-number">
                                              8
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-thu fc-past"
                                            data-date="2019-05-09"
                                          >
                                            <span className="fc-day-number">
                                              9
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-fri fc-past"
                                            data-date="2019-05-10"
                                          >
                                            <span className="fc-day-number">
                                              10
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-sat fc-past"
                                            data-date="2019-05-11"
                                          >
                                            <span className="fc-day-number">
                                              11
                                            </span>
                                          </td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td rowSpan={2} />
                                          <td rowSpan={2} />
                                          <td rowSpan={2} />
                                          <td className="fc-event-container">
                                            <a
                                              className="fc-day-grid-event fc-h-event fc-event fc-start fc-end"
                                              href="modal:#public-event"
                                            >
                                              <div className="fc-content">
                                                {" "}
                                                <span className="fc-title">
                                                  Storm
                                                </span>
                                              </div>
                                            </a>
                                          </td>
                                          <td rowSpan={2} />
                                          <td rowSpan={2} />
                                          <td rowSpan={2} />
                                        </tr>
                                        <tr>
                                          <td className="fc-event-container">
                                            <a
                                              className="fc-day-grid-event fc-h-event fc-event fc-start fc-end"
                                              href="modal:#private-event"
                                            >
                                              <div className="fc-content">
                                                {" "}
                                                <span className="fc-title">
                                                  Gale ...
                                                </span>
                                              </div>
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div
                                  className="fc-row fc-week fc-widget-content"
                                  style={{ height: "97.0469px" }}
                                >
                                  <div className="fc-bg">
                                    <table className>
                                      <tbody>
                                        <tr>
                                          <td
                                            className="fc-day fc-widget-content fc-sun fc-past"
                                            data-date="2019-05-12"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-mon fc-past"
                                            data-date="2019-05-13"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-tue fc-past"
                                            data-date="2019-05-14"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-wed fc-past"
                                            data-date="2019-05-15"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-thu fc-past"
                                            data-date="2019-05-16"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-fri fc-past"
                                            data-date="2019-05-17"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-sat fc-past"
                                            data-date="2019-05-18"
                                          />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="fc-content-skeleton">
                                    <table>
                                      <thead>
                                        <tr>
                                          <td
                                            className="fc-day-top fc-sun fc-past"
                                            data-date="2019-05-12"
                                          >
                                            <span className="fc-day-number">
                                              12
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-mon fc-past"
                                            data-date="2019-05-13"
                                          >
                                            <span className="fc-day-number">
                                              13
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-tue fc-past"
                                            data-date="2019-05-14"
                                          >
                                            <span className="fc-day-number">
                                              14
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-wed fc-past"
                                            data-date="2019-05-15"
                                          >
                                            <span className="fc-day-number">
                                              15
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-thu fc-past"
                                            data-date="2019-05-16"
                                          >
                                            <span className="fc-day-number">
                                              16
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-fri fc-past"
                                            data-date="2019-05-17"
                                          >
                                            <span className="fc-day-number">
                                              17
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-sat fc-past"
                                            data-date="2019-05-18"
                                          >
                                            <span className="fc-day-number">
                                              18
                                            </span>
                                          </td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div
                                  className="fc-row fc-week fc-widget-content"
                                  style={{ height: "97.0469px" }}
                                >
                                  <div className="fc-bg">
                                    <table className>
                                      <tbody>
                                        <tr>
                                          <td
                                            className="fc-day fc-widget-content fc-sun fc-past"
                                            data-date="2019-05-19"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-mon fc-past"
                                            data-date="2019-05-20"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-tue fc-past"
                                            data-date="2019-05-21"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-wed fc-past"
                                            data-date="2019-05-22"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-thu fc-past"
                                            data-date="2019-05-23"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-fri fc-past"
                                            data-date="2019-05-24"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-sat fc-past"
                                            data-date="2019-05-25"
                                          />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="fc-content-skeleton">
                                    <table>
                                      <thead>
                                        <tr>
                                          <td
                                            className="fc-day-top fc-sun fc-past"
                                            data-date="2019-05-19"
                                          >
                                            <span className="fc-day-number">
                                              19
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-mon fc-past"
                                            data-date="2019-05-20"
                                          >
                                            <span className="fc-day-number">
                                              20
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-tue fc-past"
                                            data-date="2019-05-21"
                                          >
                                            <span className="fc-day-number">
                                              21
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-wed fc-past"
                                            data-date="2019-05-22"
                                          >
                                            <span className="fc-day-number">
                                              22
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-thu fc-past"
                                            data-date="2019-05-23"
                                          >
                                            <span className="fc-day-number">
                                              23
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-fri fc-past"
                                            data-date="2019-05-24"
                                          >
                                            <span className="fc-day-number">
                                              24
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-sat fc-past"
                                            data-date="2019-05-25"
                                          >
                                            <span className="fc-day-number">
                                              25
                                            </span>
                                          </td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div
                                  className="fc-row fc-week fc-widget-content"
                                  style={{ height: "97.125px" }}
                                >
                                  <div className="fc-bg">
                                    <table className>
                                      <tbody>
                                        <tr>
                                          <td
                                            className="fc-day fc-widget-content fc-sun fc-past"
                                            data-date="2019-05-26"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-mon fc-past"
                                            data-date="2019-05-27"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-tue fc-past"
                                            data-date="2019-05-28"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-wed fc-past"
                                            data-date="2019-05-29"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-thu fc-past"
                                            data-date="2019-05-30"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-fri fc-past"
                                            data-date="2019-05-31"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-sat fc-other-month fc-past"
                                            data-date="2019-06-01"
                                          />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="fc-content-skeleton">
                                    <table>
                                      <thead>
                                        <tr>
                                          <td
                                            className="fc-day-top fc-sun fc-past"
                                            data-date="2019-05-26"
                                          >
                                            <span className="fc-day-number">
                                              26
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-mon fc-past"
                                            data-date="2019-05-27"
                                          >
                                            <span className="fc-day-number">
                                              27
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-tue fc-past"
                                            data-date="2019-05-28"
                                          >
                                            <span className="fc-day-number">
                                              28
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-wed fc-past"
                                            data-date="2019-05-29"
                                          >
                                            <span className="fc-day-number">
                                              29
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-thu fc-past"
                                            data-date="2019-05-30"
                                          >
                                            <span className="fc-day-number">
                                              30
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-fri fc-past"
                                            data-date="2019-05-31"
                                          >
                                            <span className="fc-day-number">
                                              31
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-sat fc-other-month fc-past"
                                            data-date="2019-06-01"
                                          >
                                            <span className="fc-day-number">
                                              1
                                            </span>
                                          </td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td className="fc-event-container">
                                            <a
                                              className="fc-day-grid-event fc-h-event fc-event fc-start fc-end"
                                              href="modal:#public-event"
                                            >
                                              <div className="fc-content">
                                                {" "}
                                                <span className="fc-title">
                                                  Torrential rain ...
                                                </span>
                                              </div>
                                            </a>
                                          </td>
                                          <td rowSpan={3} />
                                          <td rowSpan={3} />
                                          <td rowSpan={3} />
                                          <td className="fc-event-container">
                                            <a
                                              className="fc-day-grid-event fc-h-event fc-event fc-start fc-end"
                                              href="modal:#private-event"
                                            >
                                              <div className="fc-content">
                                                {" "}
                                                <span className="fc-title">
                                                  Humid...
                                                </span>
                                              </div>
                                            </a>
                                          </td>
                                          <td rowSpan={3} />
                                          <td rowSpan={3} />
                                        </tr>
                                        <tr>
                                          <td className="fc-event-container">
                                            <a
                                              className="fc-day-grid-event fc-h-event fc-event fc-start fc-end"
                                              href="modal:#private-event"
                                            >
                                              <div className="fc-content">
                                                {" "}
                                                <span className="fc-title">
                                                  Cold...
                                                </span>
                                              </div>
                                            </a>
                                          </td>
                                          <td
                                            className="fc-event-container"
                                            rowSpan={2}
                                          >
                                            <a
                                              className="fc-day-grid-event fc-h-event fc-event fc-start fc-end"
                                              href="modal:#public-event"
                                            >
                                              <div className="fc-content">
                                                {" "}
                                                <span className="fc-title">
                                                  Freezing ...
                                                </span>
                                              </div>
                                            </a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="fc-event-container">
                                            <a
                                              className="fc-day-grid-event fc-h-event fc-event fc-start fc-end"
                                              href="modal:#public-event"
                                            >
                                              <div className="fc-content">
                                                {" "}
                                                <span className="fc-title">
                                                  Overcast ...
                                                </span>
                                              </div>
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div
                                  className="fc-row fc-week fc-widget-content"
                                  style={{ height: "97.0469px" }}
                                >
                                  <div className="fc-bg">
                                    <table className>
                                      <tbody>
                                        <tr>
                                          <td
                                            className="fc-day fc-widget-content fc-sun fc-other-month fc-past"
                                            data-date="2019-06-02"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-mon fc-other-month fc-past"
                                            data-date="2019-06-03"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-tue fc-other-month fc-past"
                                            data-date="2019-06-04"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-wed fc-other-month fc-past"
                                            data-date="2019-06-05"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-thu fc-other-month fc-past"
                                            data-date="2019-06-06"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-fri fc-other-month fc-past"
                                            data-date="2019-06-07"
                                          />
                                          <td
                                            className="fc-day fc-widget-content fc-sat fc-other-month fc-past"
                                            data-date="2019-06-08"
                                          />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="fc-content-skeleton">
                                    <table>
                                      <thead>
                                        <tr>
                                          <td
                                            className="fc-day-top fc-sun fc-other-month fc-past"
                                            data-date="2019-06-02"
                                          >
                                            <span className="fc-day-number">
                                              2
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-mon fc-other-month fc-past"
                                            data-date="2019-06-03"
                                          >
                                            <span className="fc-day-number">
                                              3
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-tue fc-other-month fc-past"
                                            data-date="2019-06-04"
                                          >
                                            <span className="fc-day-number">
                                              4
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-wed fc-other-month fc-past"
                                            data-date="2019-06-05"
                                          >
                                            <span className="fc-day-number">
                                              5
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-thu fc-other-month fc-past"
                                            data-date="2019-06-06"
                                          >
                                            <span className="fc-day-number">
                                              6
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-fri fc-other-month fc-past"
                                            data-date="2019-06-07"
                                          >
                                            <span className="fc-day-number">
                                              7
                                            </span>
                                          </td>
                                          <td
                                            className="fc-day-top fc-sat fc-other-month fc-past"
                                            data-date="2019-06-08"
                                          >
                                            <span className="fc-day-number">
                                              8
                                            </span>
                                          </td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                          <td />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
