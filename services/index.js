import axios from "axios";

const services = {
  async getUnits({ params }) {
    const response = await axios.get("http://localhost:3005/listings", {
      params,
    });
    return response;
  },
};

export default services;
