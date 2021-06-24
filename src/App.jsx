import React, { useEffect, useState } from "react";

// import common css
import "./assets/css/fonts.css";
import "./assets/css/fonts.min.css";
import "./assets/css/main.css";
import "./assets/css/main.min.css";

// router
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import history
import { createBrowserHistory } from "history";

// import component
import LoginPage from "./Pages/Login/LoginPage";
import WatchPage from "./Pages/Watch/WatchPage";
import IndexPage from "./Pages/Index/IndexPage";
import AdminPage from "./Pages/Admin/AdminPage";

// import socket libary io
import io from "socket.io-client";
import { APP_TOKEN, defaultCity, FETCH_ALL_WEATHERS } from "./util/appUtil";

// import makeToast
import makeToast from "./Toaster";

import "./index.css";
import { useDispatch } from "react-redux";
// alert
// import Swal from "sweetalert2";

export const history = createBrowserHistory();

function App() {
  const [socket, setSocket] = React.useState(null);
  const dispatch = useDispatch();
  // const SocketContext = React.createContext(setupSocket);

  const setupSocket = async () => {
    const token = localStorage.getItem(APP_TOKEN);

    if (token && !socket) {
      const newSocket = io("http://localhost:8000", {
        query: {
          token: localStorage.getItem(APP_TOKEN),
        },
        transports: ["websocket"],
        upgrade: false,
      });

      // newSocket.set("origins", "*");

      // if disconnect
      newSocket.on("disconnect", () => {
        console.log("disconnected");
        setSocket(null);
        setTimeout(setupSocket, 3000);

        makeToast("error", "Socket Disconnected!");
      });

      // if connect
      newSocket.on("connect", async () => {
        console.log("connected");

        makeToast("success", "Socket Connected!");
      });

      newSocket.on("listenCityWeather", (weather) => {
        dispatch({ type: FETCH_ALL_WEATHERS, payload: weather });
        makeToast("success", "Weather have updated");
      });

      setSocket(newSocket);
    }
  };

  useEffect(() => {
    setupSocket();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact socket={socket} />
        <Route
          path="/login"
          exact
          render={() => <LoginPage setupSocket={setupSocket} socket={socket} />}
        />
        <Route
          path="/dashboard"
          exact
          render={() => <WatchPage socket={socket} />}
        />
        <Route
          path="/admin"
          exact
          render={() => <AdminPage socket={socket} setupSocket={setupSocket} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
