import axios from "axios";

const API_BASE = process.env.REACT_APP_BACKEND_URL || "http://backend:8080";
const API_URL = `${API_BASE}/back1/auth`;

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}/signup`, { username, email, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};
