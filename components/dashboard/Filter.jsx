const Filter = ({ id, filterByIdHandler }) => {
 return (
  <label
   htmlFor="filter-by-id"
   className="flex gap-x-4 items-baseline font-sans"
  >
   <span className="hidden md:block font-[700] text-[14px]">Filters by ID:</span>
   <input
    id="filter-by-id"
    type="text"
    value={id}
    placeholder="ex: 45785"
    onChange={filterByIdHandler}
    className="w-[123px] h-[21px] p-2 placeholder:text-xs placeholder:font-light placeholder:text-gray-300 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm"
   />
  </label>
 );
};

export default Filter;
