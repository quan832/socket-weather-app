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
                <h1>Create and Manage Events</h1>
                <p>
                  Welcome to your personal planner assistant. Here you’ll see
                  all your next events and invites that your friends sent you.
                  You can create 3 different types of events: Personal (for your
                  daily errands), Private (for you and friends only) and Public
                  (open to everyone). Create your events, invite friends and
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
