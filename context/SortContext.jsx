import { createContext, useState } from "react";

export const SortContext = createContext(null);

export const SortContextProvider = ({ children }) => {
  const [sort, setSort] = useState("unit_id");

  const value = {
    sort,
    setSort,
  };

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
