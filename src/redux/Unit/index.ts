import { createSlice } from "@reduxjs/toolkit";
import thunks from "./thunks";
import { RootState } from "../store";
import * as actions from "./actions";

const initialValues = {
  units: [],
  page: 1,
  imagesToView: [],
  totalCount: 0,
};

export const slice = createSlice({
  name: "unit",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.doGetUnits.fulfilled, (state, action) => {
      state.units = action.payload.data;
      state.totalCount = action.payload.headers["x-total-count"];
    });
    builder.addCase(thunks.doGetUnits.rejected, (state, action) => {
      alert("something went wrong, please try again!");
    });
    builder.addCase(actions.doGetNextPage, (state) => {
      state.page = state.page + 1;
    });
    builder.addCase(actions.doGetPrevPage, (state) => {
      state.page = state.page - 1;
    });
    builder.addCase(actions.doSetImagesToView, (state, action) => {
      state.imagesToView = action.payload;
    });
    builder.addCase(actions.doSetPage, (state, action) => {
      state.page = action.payload;
    });
  },
});

const Unit = {
  thunks,
  slice,
  actions,
};

export const selectUnits = (state: RootState) => state.unit.units;
export const selectPage = (state: RootState) => state.unit.page;
export const selectImagesToView = (state: RootState) => state.unit.imagesToView;
export const selecTotalCount = (state: RootState) => state.unit.totalCount;

export default Unit;
