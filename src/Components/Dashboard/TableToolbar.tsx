import React, { useState, useEffect } from "react";
import { fetchData } from "@/Store/filterReducer";
import { filterActions } from "@/Store/filterReducer";
import { useDispatch } from "react-redux";
import SortSelect from "./SortSelect";
import { Toolbar, Typography, Tooltip, Box } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { InputField } from "@/styles/dashboard/datatableStyle";

const TableToolbar = () => {
  const dispatch = useDispatch<any>();
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    if (selectValue !== "") {
      dispatch(filterActions.filterById(selectValue));
    } else {
      dispatch(fetchData());
    }
  }, [dispatch, selectValue]);

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 0, sm: 1 },
        backgroundColor: "#E5E5E5",
        padding: "10px",
        display: "flex",
        flexWrap: { xs: "wrap", sm: "nowrap" },
      }}
    >
      <Typography
        sx={{ flex: "1 1 270%", display: "flex" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Filters by ID:
        <InputField
          type="text"
          onChange={(e) => setSelectValue(e.target.value)}
          placeholder="ex:45785"
          id="outlined-basic"
          size="small"
        />
      </Typography>
      <Tooltip title="Filter list" sx={{ display: "flex", alignItems: "end" }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FilterListIcon />
          <Typography>Sort by:</Typography>

          <SortSelect />

        </Box>
      </Tooltip>
    </Toolbar>
  );
};

export default TableToolbar;
