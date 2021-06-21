import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// redux
import rootSaga from "./redux/sagas/rootSaga";
import { Provider } from "react-redux";
import { store } from "./redux/store/index";
// redux persit
import { persistor, sagaMiddleware } from "./redux/store/index";
import { PersistGate } from "redux-persist/integration/react";

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
