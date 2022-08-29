import UnitApi from "./API";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const doGetUnits = createAsyncThunk<any, any, any>(
  "unit/fetch",
  async (data: any, thunkAPI) => {
    try {
      const response = await UnitApi.getUnites(data);
      return {
        data: response.data,
        headers: response.headers,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const thunks = {
  doGetUnits,
};

export default thunks;
