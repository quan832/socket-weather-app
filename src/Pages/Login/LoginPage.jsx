import React, { Fragment } from "react";
import LoginSvg from "../../assets/svg-icons/login-icon.svg?component";
import RegisterSvg from "../../assets/svg-icons/register-icon.svg?component";

// import component
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";

// import styled component
import { LoginContentStyled } from "../../styleSheet/Login/LoginContent.style";
import axios from "axios";
import { APP_TOKEN, LOGIN_NEW_USER } from "../../util/appUtil";
import { history } from "../../App";

import { withRouter } from "react-router-dom";
import makeToast from "../../Toaster";
import { useDispatch } from "react-redux";

function LoginPage(props) {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const dispatch = useDispatch();

  const loginUser = () => {
    // get value input
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // request HTTP -> post, { email: "", password:  " "}
    axios
      .post("http://localhost:8000/user/login", {
        email,
        password,
      })
      // if sever return successfully
      .then((res) => {
        // notifications
        makeToast("success", res.data.message);

        // set token in local storage
        localStorage.setItem(APP_TOKEN, res.data.token);

        // return dashboard pages
        props.history.push("/dashboard");

        // save data in redux
        dispatch({
          type: LOGIN_NEW_USER,
          payload: {
            token: res.data.token,
            type: res.data.type,
          },
        });

        // set up socket
        props.setupSocket();
      })
      .catch((err) => {
        makeToast("error", "User and Password does not match");
      });
  };

  return (
    <div className="landing-page html_crumina_net">
      <div className="content-bg-wrap" />
      <LoginContentStyled />
      <div className="container">
        <div className="row display-flex">
          <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="landing-content">
              <h1>Welcome to Real Time Weather-App</h1>
              <p>
                We use React, Nodejs, Socket.IO & MonoDB for building Real Time
                Weather App,
              </p>
              <a href="#" className="btn btn-md btn-border c-white">
                Register Now!
              </a>
            </div>
          </div>
          <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
            {/* Login-Registration Form  */}
            <div className="registration-login-form">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                  >
                    <RegisterSvg />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                  >
                    <LoginSvg />
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                {/* Login */}
                {/* <Login setupSocket={props.setupSocket} /> */}
                <div
                  className="tab-pane"
                  id="profile"
                  role="tabpanel"
                  data-mh="log-tab"
                >
                  <div className="title h6">Login to your Account</div>
                  <form className="content">
                    <div className="row">
                      <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group label-floating">
                          <label className="control-label">Your Email</label>
                          <input
                            className="form-control"
                            style={{ paddingTop: "35px" }}
                            placeholder
                            type="email"
                            ref={emailRef}
                          />
                        </div>
                        <div className="form-group label-floating">
                          <label className="control-label">Your Password</label>
                          <input
                            className="form-control"
                            style={{ paddingTop: "35px" }}
                            placeholder
                            type="password"
                            ref={passwordRef}
                          />
                        </div>
                        <div className="remember">
                          <a
                            href="#"
                            className="forgot mb-2"
                            data-toggle="modal"
                            data-target="#restore-password"
                          >
                            Forgot my Password
                          </a>
                        </div>
                        <a
                          onClick={loginUser}
                          href="#"
                          className="btn btn-lg btn-primary full-width"
                        >
                          Login
                        </a>
                        <div className="or" />
                        <a
                          href="#"
                          className="btn btn-lg bg-facebook full-width btn-icon-left"
                        >
                          <i className="fab fa-facebook-f" aria-hidden="true" />
                          Login with Facebook
                        </a>
                        <a
                          href="#"
                          className="btn btn-lg bg-twitter full-width btn-icon-left"
                        >
                          <i className="fab fa-twitter" aria-hidden="true" />
                          Login with Twitter
                        </a>
                        <p>
                          Don’t you have an account?{" "}
                          <a href="#">Register Now!</a> it’s really simple and
                          you can start enjoing all the benefits!
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Register */}
                <Register />
              </div>
            </div>
            {/* ... end Login-Registration Form  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginPage);
