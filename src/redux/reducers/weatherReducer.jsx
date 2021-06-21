import { FETCH_ALL_WEATHERS_SUCCESS } from "../../util/appUtil";
import { initialState } from "../state/state";

// `arr` is an array
const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_WEATHERS_SUCCESS: {
      return {
        ...state,
        weatherState: {
          ...state.weatherState,
          weathers: [...action.payload],
          isFetching: true,
        },
      };
    }
    default:
      return state;
  }
}
