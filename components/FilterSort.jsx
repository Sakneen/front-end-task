import React from "react";

const FilterSort = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between mt-8">
      <div className="flex items-center">
        <span className="mr-4 font-bold">Filters by ID: </span>
        <input
          type="text"
          name="unitId"
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
          >
            <option value="1">Unit ID</option>
            <option value="2">Unit Type</option>
            <option value="3">Unit Price</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
