import React, { useContext } from "react";
import { SortContext } from "../../../context";

const SortInput = () => {
  const { setSort } = useContext(SortContext)!;
  return (
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
  );
};

export default SortInput;
