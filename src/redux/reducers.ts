import { combineReducers } from "@reduxjs/toolkit";
import Unit from "./Unit";
import loadingSlice from "./_loading";

const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,
  [Unit.slice.name]: Unit.slice.reducer,
});

export default combinedReducer;
