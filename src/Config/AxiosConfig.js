import axios from "axios";
import { BASE_URL } from "../Global-constants/GlobalConstants";

/**
 * Basic config of Axios
 */
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
