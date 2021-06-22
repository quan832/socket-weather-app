import { all, call, put, takeLatest } from "redux-saga/effects";
import Api from "../../services/weatherAPI";
import {
  CLICK_BUTTON,
  CLICK_BUTTON_SUCCESS,
  FETCH_ALL_WEATHERS,
  FETCH_ALL_WEATHERS_SUCCESS,
  FETCH_CITY_WEATHER,
  FETCH_CITY_WEATHER_SUCCESS,
} from "../../util/appUtil";

function* fetchAllWeathers(action) {
  try {
    const {
      payload
    } = action

    console.log(payload)

    yield put({
      type: FETCH_ALL_WEATHERS_SUCCESS,
      payload: payload.data
    });
    
  } catch (error) {}
}


function* fetchCityWeather(action) {
  try {
    const {
      payload
    } = action

    console.log(payload)

    yield put({
      type: FETCH_CITY_WEATHER_SUCCESS,
      payload: payload
    });
    
  } catch (error) {}
}

function* watchFetchAllWeather() {
  yield takeLatest(FETCH_ALL_WEATHERS, fetchAllWeathers);
}

function* watchFetchCityWeather(){
  yield takeLatest(FETCH_CITY_WEATHER, fetchCityWeather)
}
function* clickButton() {
  try {
    yield put({
      type: CLICK_BUTTON_SUCCESS,
    });
    
  } catch (error) {}
}

function* watchClickButton() {
  yield takeLatest(CLICK_BUTTON, clickButton);
}

export default function* weatherSaga() {
  yield all([watchFetchAllWeather(),watchClickButton(),watchFetchCityWeather()]);
}
