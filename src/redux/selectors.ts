import { AsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const useLoadingSelector = (action: AsyncThunk<any, any, any>) => {
  const { typePrefix } = action;
  return useSelector((state: any) => state._loading[typePrefix]) || false;
};
