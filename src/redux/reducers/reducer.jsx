import {
  CLICK_BUTTON_SUCCESS,
  FETCH_ALL_WEATHERS_SUCCESS,
  FETCH_CITY_WEATHER_SUCCESS,
  LOGIN_NEW_USER,
  UPDATE_ALL_WEATHERS,
} from "../../util/appUtil";
import { initialState } from "../state/state";

// `arr` is an array
const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_NEW_USER:
      return {
        ...state,
        userState: {
          ...action.payload,
        },
      };
    case FETCH_ALL_WEATHERS_SUCCESS: {
      return {
        ...state,
        weatherState: {
          ...state.weatherState,
          weathers: [...action.payload],
          isFetching: true,
          isUpload: false,
        },
      };
    }

    case FETCH_CITY_WEATHER_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        weatherState: {
          ...state.weatherState,
          cityWeather: {
            ...state.weatherState.cityWeather,
            ...action.payload,
          },
        },
      };
    }

    case UPDATE_ALL_WEATHERS: {
      return {
        ...state,
        weatherState: {
          ...state.weatherState,
          weathers: [...state.weatherState.weathers, action.payload],
        },
      };
    }

    case CLICK_BUTTON_SUCCESS: {
      return {
        ...state,
        weatherState: {
          ...state.weatherState,
          isUpload: true,
        },
      };
    }
    default:
      return state;
  }
}
