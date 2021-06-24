import React from "react";
import { Fragment } from "react";

import MenuIcon from "../../assets/svg-icons/menu-icon.svg?component";
import Avatar from "../../assets/img/author-page.jpg";
import ArrowIcon from "../../assets/svg-icons/dropdown-arrow-icon.svg?component";
import LogoutIcon from "../../assets/svg-icons/logout-icon.svg?component";
import StarIcon from "../../assets/svg-icons/star-icon.svg?component";

export default function HeaderAdmin() {
  return (
    <Fragment>
      {/* Header-BP */}
      <header className="header" id="site-header">
        <div className="page-title">
          <h6>Create Your Weather</h6>
        </div>
        <div className="header-content-wrapper">
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
                        <a href="29-YourAccount-AccountSettings.html">
                          <MenuIcon />
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <StarIcon />
                          <span>Return main page</span>
                        </a>
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
      {/* ... end Header-BP */}
      <div className="header-spacer header-spacer-small" />
    </Fragment>
  );
}
