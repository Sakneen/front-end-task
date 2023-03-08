import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

interface Props {
  inputValue: string;
  onInputChange: (val: string) => void;
  selectValue: string;
  onSelectChange: (val: string) => void;
  onOrderChange: () => void;
  disabled: boolean;
}

export function TableFilters({
  inputValue,
  onInputChange,
  selectValue,
  onSelectChange,
  onOrderChange,
  disabled,
}: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ flexWrap: "wrap" }}
      mt={2}
      mb={2}
    >
      <Stack direction="row" alignItems="center">
        <Typography
          fontWeight={"bold"}
          component="label"
          mr={1}
          htmlFor="id-input"
        >
          Filters By ID:
        </Typography>
        <TextField
          id="id-input"
          variant="standard"
          size="small"
          value={inputValue}
          placeholder="ex: 45785"
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
        />
      </Stack>
      <Stack direction="row" alignItems="center">
        <IconButton onClick={onOrderChange} disabled={disabled}>
          <FilterListIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </IconButton>
        <Typography
          variant="caption"
          component="label"
          htmlFor="sort-by-select"
        >
          Sort by:
        </Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            id="sort-by-select"
            value={selectValue}
            onChange={(e) => {
              onSelectChange(e.target.value);
            }}
            label="Age"
            size="small"
            disabled={disabled}
          >
            <MenuItem value={"unit_id"}>Unit ID</MenuItem>
            <MenuItem value={"unit_type"}>Unit Type</MenuItem>
            <MenuItem value={"total_price"}>Unit Price</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}
