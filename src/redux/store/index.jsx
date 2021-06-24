import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers/reducer";
// Logger with default options
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["weatherState", "userState"],
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);
let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };
