import React from "react";
import { createContext, useState } from "react";
import { searchInputContext } from "../types/Contexts";

export const SearchContext = createContext<searchInputContext | null>(null);

export const SearchContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const value: searchInputContext = {
    searchInput,
    setSearchInput,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
