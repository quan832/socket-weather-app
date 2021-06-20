import React from "react";

export default function Register() {
  return (
    <div
      className="tab-pane active"
      id="home"
      role="tabpanel"
      data-mh="log-tab"
    >
      <div className="title h6">Register to Weather App</div>
      <form className="content">
        <div className="row">
          <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="form-group label-floating">
              <label className="control-label">First Name</label>
              <input className="form-control" placeholder type="text" />
            </div>
          </div>
          <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="form-group label-floating">
              <label className="control-label">Last Name</label>
              <input className="form-control" placeholder type="text" />
            </div>
          </div>
          <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="form-group label-floating">
              <label className="control-label">Your Email</label>
              <input className="form-control" placeholder type="email" />
            </div>
            <div className="form-group label-floating">
              <label className="control-label">Your Password</label>
              <input className="form-control" placeholder type="password" />
            </div>
            <div className="form-group label-floating">
              <label className="control-label">Your Type</label>
              <select className="selectpicker form-control">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="remember">
              <div className="checkbox">
                <label>
                  <input name="optionsCheckboxes" type="checkbox" />
                  You will go to watching your
                  <a href="#"> weather city</a> in your country
                </label>
              </div>
            </div>
            <a href="#" className="btn btn-purple btn-lg full-width">
              Sign Up
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
