import axios from "axios";
import { BASE_URL } from "../util/appUtil";

function getAllWeathers() {
  return axios.get(`http://localhost:8000/weather`).then((res) => res);
}

const Api = { getAllWeathers };

export default Api;
