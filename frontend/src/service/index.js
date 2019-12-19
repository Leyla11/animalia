import axios from "axios";

const isProduction = "production";

const service = axios.create({
  withCredentials: true,
  baseURL: "https://ancient-mesa-76696.herokuapp.com/api"
});

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
