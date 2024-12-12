import api from "./api";
const API_URL = import.meta.env.VITE_BASE_URL + "/auth";

const register = async (username, password) => {
  console.log(API_URL);

  return await api.post(API_URL + "/register", { username, password });
};

const AuthService = {
  register,
};

export default AuthService;
