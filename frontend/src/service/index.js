import axios from "axios";

const isProduction = "production";

const baseURL = isProduction ? "http://localhost:3000/api" : "";

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get("/");
  },
  signup: async user => {
    return await service.post("/signup", user);
  },
  login: async user => {
    return await service.post("/login", user);
  },
  logOut: async () => {
    return await service.get("/logout");
  }
};

export default MY_SERVICE;
