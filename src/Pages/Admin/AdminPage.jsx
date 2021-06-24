import React from "react";

//import component
import HeaderAdmin from "../../admin/Header/HeaderAdmin";
import CarouselAdmin from "../../admin/Carousel/CarouselAdmin";
import Modal from "../../admin/Modal/Modal";
import CreateForecast from "../../admin/CreateForecast/CreateForecast";
import ListForecast from "../../admin/List/ListForecast";
import ModalUpdate from "../../admin/Modal/ModalUpdate";

export default function AdminPage({ socket }) {
  return (
    <div>
      <HeaderAdmin />
      <CarouselAdmin />
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block responsive-flex">
              <div className="ui-block-title">
                <ul
                  className="nav nav-tabs calendar-events-tabs"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#events"
                      role="tab"
                    >
                      Create your forecast
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#notifications"
                      role="tab"
                    >
                      List weather forecasts{" "}
                      <span className="items-round-little bg-breez">2</span>
                    </a>
                  </li>
                </ul>
                <a href="#" className="more">
                  <svg className="olymp-three-dots-icon">
                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tab panes */}
      <div className="tab-content">
        <CreateForecast />
        <ListForecast socket={socket} />
      </div>
      {/* Window-popup Create Event */}
      <Modal socket={socket} name={"create"} />

      {/* ... end Window-popup Create Event */}
      {/* Window-popup-CHAT for responsive min-width: 768px */}
    </div>
  );
}
