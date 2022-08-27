import { ChangeEventHandler } from 'react';
import { filterById } from '../lib/features/dashboardSlice';
import { useAppDispatch } from '../lib/hooks';

export function FilterInput({}) {
  const dispatch = useAppDispatch();

  const filterChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.trim().length > 0) {
      dispatch(filterById(e.target.value.trim()));
    }
  };

  return (
    <label
      htmlFor="filterById"
      className="flex gap-x-4 items-baseline font-sans"
    >
      <span className="font-bold text-sm">Filters by ID:</span>
      <input
        id="filterById"
        type="text"
        placeholder="ex: 45785"
        className="placeholder:text-xs placeholder:font-light placeholder:text-gray-300 rounded-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm px-2 py-2"
        onChange={filterChangeHandler}
      />
    </label>
  );
}
