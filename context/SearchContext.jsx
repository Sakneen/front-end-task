import { createContext, useState } from "react";

export const SearchContext = createContext(null);

export const SearchContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const value = {
    searchInput,
    setSearchInput,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
