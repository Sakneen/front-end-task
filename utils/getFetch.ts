import axios from "axios";

export const getFetch = (url, params) => {
  return axios.get(url, {
    params,
  });
};
