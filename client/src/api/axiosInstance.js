import axios from "axios";

const axiosInstance = axios.create({
  // You can add baseURL or other default settings here
  baseURL: "http://localhost:3020/",
  proxy: {
    host: "localhost",
    port: 3020,
  },
});

export default axiosInstance;
