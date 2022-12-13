import axios from "axios";
import { unitsBerPage } from "../constants";

const API = axios.create({
 baseURL: `${process.env.JSON_SERVER_HOST}`,
});

export const getUnits = async (page, sort, order,id) => {
 const res = await API.get("/listings", {
  params: {
   _page: page,
   _limit: unitsBerPage,
   _sort: sort,
   _order: order,
   unit_id_like:id,
  },
 });
 const data = await res.data;
 return data;
};
