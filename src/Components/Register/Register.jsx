import axios from "axios";
import React from "react";
import makeToast from "../../Toaster";
import { APP_TOKEN } from "../../util/appUtil";
import { withRouter } from "react-router-dom";

function Register(props) {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const firstNameRef = React.createRef();
  const LastNameRef = React.createRef();

  const typeRef = React.createRef();

  const signUpUser = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const name = firstNameRef.current.value + " " + LastNameRef.current.value;

    const type = typeRef.current.value;

    console.log(email, password, name, type);
    axios
      .post("http://localhost:8000/user/register", {
        name,
        email,
        password,
        type,
      })
      .then((res) => {
        makeToast("success", res.data.message);
        localStorage.setItem(APP_TOKEN, res.data.token);
      })
      .catch((err) => {
        makeToast("error", err);
      });
  };

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
              <input
                className="form-control"
                placeholder
                type="text"
                ref={firstNameRef}
                style={{ height: "45px" }}
              />
            </div>
          </div>
          <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="form-group label-floating">
              <label className="control-label">Last Name</label>
              <input
                className="form-control"
                placeholder
                type="text"
                ref={LastNameRef}
                style={{ height: "45px" }}
              />
            </div>
          </div>
          <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="form-group label-floating">
              <label className="control-label">Your Email</label>
              <input
                className="form-control"
                placeholder
                type="email"
                ref={emailRef}
                style={{ height: "45px" }}
              />
            </div>
            <div className="form-group label-floating">
              <label className="control-label">Your Password</label>
              <input
                className="form-control"
                placeholder
                type="password"
                ref={passwordRef}
                style={{ height: "45px" }}
              />
            </div>
            <div className="form-group label-floating">
              <label className="control-label">Your Type</label>
              <select
                className="selectpicker form-control"
                ref={typeRef}
                style={{ height: "55px" }}
              >
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
            <button
              onClick={(e) => {
                e.preventDefault();

                signUpUser();
              }}
              href="#"
              className="btn btn-purple btn-lg full-width"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Register);
