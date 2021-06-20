import React from "react";
import FindWeather from "../../assets/svg-icons/magnifying-glass-icon.svg?component";

export default function Header() {
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
            />
            <button>
              <FindWeather />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
