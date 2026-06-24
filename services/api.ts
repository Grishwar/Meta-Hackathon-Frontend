import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getTasks = async () => {
  const response = await API.get("/tasks");
  return response.data;
};

export const getAnalytics = async () => {
  const response = await API.get("/analytics");
  return response.data;
};

export default API;