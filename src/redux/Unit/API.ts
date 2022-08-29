import axios from "axios";

const getUnites = ({ page, filter, sort }: any) =>
  axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/?_limit=5&_page=${page}&unit_id_like=${filter||""}&_sort=${sort||"unit_id"}`
  );

const UnitApi = {
  getUnites,
};

export default UnitApi;
