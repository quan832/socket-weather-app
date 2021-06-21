import { all, call, put, takeLatest } from "redux-saga/effects";
import Api from "../../services/weatherAPI";
import {
  FETCH_ALL_WEATHERS,
  FETCH_ALL_WEATHERS_SUCCESS,
} from "../../util/appUtil";

function* fetchAllWeathers() {
  try {
    const { data } = yield call(Api.getAllWeathers);

    yield put({
      type: FETCH_ALL_WEATHERS_SUCCESS,
      payload: data,
    });
    
  } catch (error) {}
}

function* watchFetchAllWeather() {
  yield takeLatest(FETCH_ALL_WEATHERS, fetchAllWeathers);
}

export default function* weatherSaga() {
  yield all([watchFetchAllWeather()]);
}
