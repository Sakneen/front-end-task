import React from "react";
import { createContext, useState } from "react";
import { sortContext } from "../types/Contexts";

export const SortContext = createContext<sortContext | null>(null);

export const SortContextProvider = ({ children }) => {
  const [sort, setSort] = useState("unit_id");

  const value = {
    sort,
    setSort,
  };

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
