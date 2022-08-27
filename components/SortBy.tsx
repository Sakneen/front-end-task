import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';

interface Opt {
  label: string;
  value: string;
}
interface Props {
  options: Opt[];
  onSelectHandler: Function;
  id: string;
}

const SortBy = ({ options = [] }: { options: Opt[] }) => {
  const [option, setOption] = useState(options[0]);

  const handleChange = (event: SelectChangeEvent) => {
    const currentOpt = options.find((opt) => opt.value === event.target.value);
    setOption(currentOpt);
  };
  return (
    <>
      <section className="flex items-baseline">
        <div className="text-sm">
          <FilterListIcon fontSize="small" className="text-[#9E9E9E] mr-2" />
          <span className="">Sort by:</span>
        </div>
        <FormControl className="text-sm w-[110px] leading-none" size="small">
          <InputLabel
            id="sortBy-label"
            shrink={false}
            variant="outlined"
            size="small"
            className="text-sm "
          >
            {option.label}
          </InputLabel>
          <Select
            labelId="sortBy-label"
            id="sortBy"
            value={option.value}
            onChange={handleChange}
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

export default SortBy;

{
  /* <select
  id={id}
  className="rounded-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm  py-1 font-[500] w-20"
>
  {options?.map((opt) => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  ))}
</select>; */
}
