import React, { useContext } from "react";
import { SearchContext } from "../../../context";

const SearchInput = () => {
  const { searchInput, setSearchInput } = useContext(SearchContext)!;
  return (
    <div className="flex items-center">
      <span className="mr-4 font-bold">Filters by ID: </span>
      <input
        type="text"
        name="unitId"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="ex: 45785"
        className="p-1 shadow-sm"
      />
    </div>
  );
};

export default SearchInput;
