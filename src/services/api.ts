import axios from "axios";

const Api = axios.create({
  baseURL: process.env.NEXTJS_API,
});

export default Api;
