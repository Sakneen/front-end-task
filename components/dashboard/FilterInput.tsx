import {
  ChangeEventHandler,
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from 'react';
import { filterById, sortBy } from '../../lib/features/dashboardSlice';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';

export function FilterInput({}) {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredInput = useDeferredValue(query);

  const filterChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value.trim());
  };

  useEffect(() => {
    startTransition(() => {
      dispatch(filterById(deferredInput));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deferredInput]);

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
        className={`placeholder:text-xs placeholder:font-light placeholder:text-gray-300 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm px-2 py-2`}
        onChange={filterChangeHandler}
        value={query}
      />
    </label>
  );
}
