import axios from "axios";
export const API = "http://localhost:5432/api/workouts";
const axiosClient = axios.create({
  baseURL: "http://localhost:5432/api/workouts",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
export default axiosClient;
