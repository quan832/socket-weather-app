import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// import axios from "axios";
import moment from "moment";
import { FORMAT_DATE } from "../../util/appUtil";

import friendHarmonic1 from "../../assets/img/friend-harmonic1.jpg";
import friendHarmonic5 from "../../assets/img/friend-harmonic5.jpg";
import friendHarmonic3 from "../../assets/img/friend-harmonic3.jpg";
import friendHarmonic8 from "../../assets/img/friend-harmonic10.jpg";
import friendHarmonic2 from "../../assets/img/friend-harmonic2.jpg";

import ModalUpdate from "../Modal/ModalUpdate";

export default function ListForecast({ socket }) {
  const weathers = useSelector((state) => state.weatherState.weathers);

  const renderWeather = () => {
    return weathers?.map((item, index) => {
      console.log(item);
      return (
        <Fragment>
          <tr className="event-item">
            <td className="author">
              <div className="event-author inline-items">
                <div className="author-date">
                  <a href="#" className="author-name h6">
                    {item.cityName}
                  </a>{" "}
                </div>
              </div>
            </td>
            <td className="location">
              <div className="place inline-items">
                <svg className="olymp-add-a-place-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-a-place-icon" />
                </svg>
                <span>{item.avrTemperature}</span>
              </div>
            </td>
            <td className="upcoming">
              <div className="date-event inline-items align-left">
                <span className="month">
                  {moment.utc(item.dateTime).format(FORMAT_DATE)}
                </span>
              </div>
            </td>
            <td className="description">
              <p className="description">
                Hey! I thought we could all get together and grab something to
                eat to remember old times!
              </p>
            </td>
            <td className="users">
              <ul className="friends-harmonic">
                <li>
                  <a href="#">
                    <img src={friendHarmonic1} alt="friend" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={friendHarmonic5} alt="friend" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={friendHarmonic3} alt="friend" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={friendHarmonic8} alt="friend" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={friendHarmonic2} alt="friend" />
                  </a>
                </li>
                <li>
                  <a href="#" className="all-users bg-breez">
                    +{index + 10}
                  </a>
                </li>
              </ul>
            </td>
            <td className="add-event">
              <a href="#" className="btn btn-breez btn-sm">
                Add Date Weather
              </a>
              <a
                href="#"
                className="btn btn-sm btn-border-think custom-color c-grey"
                data-toggle="modal"
                data-target={`#update${item._id}`}
              >
                Edit
              </a>
            </td>
          </tr>
          <ModalUpdate socket={socket} name={`update`} item={item} />
        </Fragment>
      );
    });
  };

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
                <tbody>{renderWeather()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
