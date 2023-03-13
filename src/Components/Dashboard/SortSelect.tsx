import  React , {useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { filterActions } from "@/Store/filterReducer";
import { useDispatch , useSelector} from 'react-redux';

export default function SortSelect() {
  const dispatch = useDispatch()
  const [value , setValue] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
    dispatch(filterActions.sortByType(event.target.value))
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sort Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        label="SortType"
        onChange={handleChange}
      >
        <MenuItem value="unit_id">Unit ID</MenuItem>
        <MenuItem value="unit_type">Unit Type</MenuItem>
        <MenuItem value="total_price">Unit Price</MenuItem>
      </Select>
    </FormControl>
  );
}