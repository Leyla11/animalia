import axios from "axios";
const isProduction = process.env.NODE_ENV === "production";

const baseURL = isProduction
  ? "http://localhost:3000/api"
  : "http://localhost:3000/api";

const service = axios.create({ baseURL });

const CENTER_SERVICE = {
  addCenter: async center => {
    try {
      console.log(center);
      return await service.post("/create-new", center);
    } catch (error) {
      console.error(error);
    }
  },

  addContribution: async contribution => {
    try {
      console.log(contribution);
      return await service.post("/add-contribution", contribution);
    } catch (error) {
      console.error(error);
    }
  }
};

export default CENTER_SERVICE;
