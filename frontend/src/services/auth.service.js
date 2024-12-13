import api from "./api";
import { Cookies } from "react-cookie";
const API_URL = import.meta.env.VITE_BASE_URL + "/auth";

const cookies = new Cookies();
const register = async (username, password) => {
  return await api.post(API_URL + "/register", { username, password });
};

const login = async (username, password) => {
  const response = await api.post(API_URL + "/login", { username, password });

  //save data to cookies
  const {status, data} = response; // restruc data&response
  // console.log(status,data);
  
  if (status === 200) {
    console.log(data);
    
    if (data.accessToken) 
      {
      cookies.set("accessToken", data.accessToken, {path:"/", expires:new Date(Date.now() + 86400),//expire date 24h
      });
        cookies.set("user", data);
   
      }
  }
  return response;
};

const logout = () =>{
  cookies.remove("accessToken", {path:"/"});
  cookies.remove("user", {path:"/"});
  
}

const AuthService = {
  register,
  login,
  logout
};

export default AuthService;