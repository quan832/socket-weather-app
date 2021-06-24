import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FindWeather from "../../assets/svg-icons/magnifying-glass-icon.svg?component";
import makeToast from "../../Toaster";
import { FETCH_CITY_WEATHER } from "../../util/appUtil";

import MenuIcon from "../../assets/svg-icons/menu-icon.svg?component";
import Avatar from "../../assets/img/author-page.jpg";
import ArrowIcon from "../../assets/svg-icons/dropdown-arrow-icon.svg?component";
import LogoutIcon from "../../assets/svg-icons/logout-icon.svg?component";
import StarIcon from "../../assets/svg-icons/star-icon.svg?component";

import { NavLink } from "react-router-dom";

import _ from "lodash";

export default function Header({ socket }) {
  const [citySearch, setCitySearch] = useState("");

  const [submit, setSubmit] = useState(false);

  const dispatch = useDispatch();
  const cityRef = React.createRef();

  const handleClick = _.debounce(() => {
    setSubmit(!submit);
  }, 300);

  useEffect(() => {
    console.log(_.isEmpty(submit));
    if (socket && submit === true) {
      const weather = cityRef.current.value;
      socket.emit("getCityWeather", weather);

      socket.on("newCityWeather", ({ data, userId }) => {
        if (data === null) {
          return makeToast("error", `Your city is not match!`);
        }
        makeToast("success", `Get ${data.cityName} weather forecast!`);
        return dispatch({ type: FETCH_CITY_WEATHER, payload: data });
      });

      socket.on("error", (err) => {
        makeToast("error", `${err}`);
      });
      setSubmit(false);
    }
  }, [submit]);

  return (
    <header className="header" id="site-header">
      <div className="page-title">
        <h6>weather widget</h6>
      </div>
      <div className="header-content-wrapper">
        <form className="search-bar w-search notification-list friend-requests">
          <div className="form-group with-button">
            <input
              className="form-control js-user-search"
              placeholder="Search here people or pages..."
              type="text"
              ref={cityRef}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              <FindWeather />
            </button>
          </div>
        </form>
        <div className="control-block">
          <div className="author-page author vcard inline-items more">
            <div className="author-thumb">
              <img alt="author" src={Avatar} className="avatar" />
              <span className="icon-status online" />
              <div className="more-dropdown more-with-triangle">
                <div className="mCustomScrollbar" data-mcs-theme="dark">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Your Account</h6>
                  </div>
                  <ul className="account-settings">
                    <li>
                      <a href="#">
                        <MenuIcon />
                        <span>Profile Settings</span>
                      </a>
                    </li>
                    <li>
                      <NavLink to="/admin">
                        <StarIcon />
                        <span>Return admin page</span>
                      </NavLink>
                    </li>
                    <li>
                      <a href="#">
                        <LogoutIcon />
                        <span>Log Out</span>
                      </a>
                    </li>
                  </ul>
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Chat Settings</h6>
                  </div>
                  <ul className="chat-settings">
                    <li>
                      <a href="#">
                        <span className="icon-status online" />
                        <span>Online</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-status away" />
                        <span>Away</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-status disconected" />
                        <span>Disconnected</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-status status-invisible" />
                        <span>Invisible</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a className="author-name fn">
              <div className="author-title">
                Quan Tran <ArrowIcon />
              </div>
              <span className="author-subtitle">admin</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
