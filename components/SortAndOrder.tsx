import FilterListIcon from '@mui/icons-material/FilterList';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { options, orderBy, sortBy } from '../lib/features/dashboardSlice';
import { useAppDispatch, useAppSelector } from '../lib/hooks';

const SortAndOrder = () => {
  const dispath = useAppDispatch();
  const { _order, _sort } = useAppSelector(({ dashboard }) => dashboard);

  const handleOrder = () => dispath(orderBy());

  const handleSort = (event: SelectChangeEvent) =>
    dispath(sortBy(event.target.value));

  const currentLabel = options.find((opt) => opt.value === _sort).label;

  return (
    <>
      <section className="flex items-center">
        <div
          className={`text-sm cursor-pointer   rounded-full w-6 h-6 mr-2 flex justify-center items-center active:animate-bounce ${
            _order !== 'asc' ? 'bg-slate-200' : 'bg-slate-50'
          }`}
          onClick={handleOrder}
        >
          <FilterListIcon
            fontSize="small"
            className={`text-[#9E9E9E] cursor-pointer  hover:text-gray-700 ${
              _order !== 'asc' ? 'text-gray-900' : ''
            }`}
          />
        </div>
        <span className="">Sort by:</span>
        <FormControl className="text-sm w-[110px] leading-none" size="small">
          <InputLabel
            id="sortBy-label"
            shrink={false}
            variant="outlined"
            size="small"
            className="text-sm "
          >
            {currentLabel}
          </InputLabel>
          <Select
            labelId="sortBy-label"
            id="sortBy"
            value={_sort}
            onChange={handleSort}
            className="text-transparent text-sm"
          >
            {options.map((opt) => (
              <MenuItem key={opt.value} value={opt.value} className="text-sm ">
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </section>
    </>
  );
};

export default SortAndOrder;
