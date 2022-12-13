//MUI
import FilterListIcon from "@mui/icons-material/FilterList";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

//Constants
import { sortOptions } from "../../constants";

const Sort = ({ currentSort, sortHandler, currentOrder, orderHandler }) => {
 return (
  <section className="flex items-center">
   <div
    onClick={() => orderHandler("asc")}
    className={`text-sm ${
     currentOrder === "asc" ? "rotate-180" : ""
    } duration-1000 cursor-pointer rounded-full flex items-center w-6 h-8 mr-2`}
   >
    <FilterListIcon
     fontSize="small"
     className={` cursor-pointer text-[#9E9E9E] transition active:scale-150 hover:text-gray-700  `}
    />
   </div>
   <span className="font-[400] text-[11px]">Sort by:</span>
   <FormControl className="text-sm w-[110px] leading-none" size="small">
    <InputLabel
     id="sortBy-label"
     shrink={false}
     variant="outlined"
     size="small"
     className="text-sm border-0"
    >
     {currentSort}
    </InputLabel>
    <Select
     labelId="sortBy-label"
     id="sortBy"
     value={currentSort}
     onChange={sortHandler}
     className="text-transparent text-sm"
    >
     {sortOptions.map((option) => (
      <MenuItem
       key={option.id}
       value={option.value}
       className={`${currentSort === option.value && "bg-[#F5F5F5]"}ext-sm`}
      >
       {option.name}
      </MenuItem>
     ))}
    </Select>
   </FormControl>
  </section>
 );
};

export default Sort;
