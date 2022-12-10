import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { SortContext } from "../context/SortContext";

const FilterSort = () => {
  const { searchInput, setSearchInput } = useContext(SearchContext)!;
  const { setSort } = useContext(SortContext)!;
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between mt-8">
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
      <div className="flex items-center">
        <span className="mr-4">Sort by: </span>
        <div>
          <select
            className=" w-auto py-1.5 text-base font-normal text-gray-700 bg-transparent border-none
             focus:outline-none"
            aria-label="Default select example"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="unit_id">Unit ID</option>
            <option value="unit_type">Unit Type</option>
            <option value="total_price">Unit Price</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
