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

// import socket libary io
import io from "socket.io-client";
import { APP_TOKEN, defaultCity } from "./util/appUtil";

// import makeToast
import makeToast from "./Toaster";

export const history = createBrowserHistory();

function App() {
  

  const [socket, setSocket] = React.useState(null);
  
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
      await newSocket.on("connect", () => {
        console.log("connected");
        makeToast("success", "Socket Connected!");
      });

      setSocket(newSocket);

      console.log(socket);
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
          render={() => <LoginPage setupSocket={setupSocket} />}
        />
        <Route
          path="/dashboard"
          exact
          render={() => <WatchPage socket={socket} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
