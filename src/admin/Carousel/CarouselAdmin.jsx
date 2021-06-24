import React, { Fragment } from "react";

export default function CarouselAdmin() {
  return (
    <Fragment>
      {/* Main Header Events */}
      <div className="main-header">
        <div className="content-bg-wrap bg-events" />
        <div className="container">
          <div className="row">
            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div className="main-header-content">
                <h1>Create and Manage Weathers</h1>
                <p>
                  Welcome to your personal planner assistant. Here you’ll see
                  all your next weathers and forecast in your city now. You can
                  create 2 different types of : City Weather (for your city
                  weather ), and Date Weather (open your date weathers in your
                  cityto everyone). Create your weathers, invite friends and
                  have fun!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ... end Main Header Events */}
    </Fragment>
  );
}
