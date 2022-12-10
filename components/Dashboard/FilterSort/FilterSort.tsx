import React from "react";
import SearchInput from "./SearchInput";
import SortInput from "./SortInput";

const FilterSort = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between mt-8">
      <SearchInput />
      <SortInput />
    </div>
  );
};

export default FilterSort;
