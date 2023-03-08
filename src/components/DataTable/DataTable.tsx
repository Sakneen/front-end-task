import { useGetData, useDebounce } from "@/hooks";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import { Table } from "./Table/Table";

import { TableFilters } from "./TableFilters/TableFilters";

export function DataTable() {
  const [filter, setFilter] = useState("");
  const [input, setInput] = useState("");
  const [sort, setSort] = useState("unit_id");
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [limit, setLimit] = useState(5);

  const debouncedSetFilter = useDebounce((val: string) => {
    setFilter(val);
    setPage(1);
  }, 500);

  const { isLoading, isError, data, error } = useGetData({
    id: filter,
    sort,
    page,
    limit,
    order,
  });

  const handleInputChange = (val: string) => {
    setInput(val);
    debouncedSetFilter(val);
  };

  const handleSortChange = (val: string) => {
    setSort(val);
  };

  const handlePageChange = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleOrderChange = () => {
    setOrder((val) => (val === "asc" ? "desc" : "asc"));
  };

  return (
    <>
      <TableFilters
        inputValue={input}
        selectValue={sort}
        onInputChange={handleInputChange}
        onSelectChange={handleSortChange}
        onOrderChange={handleOrderChange}
        disabled={isLoading}
      />
      <Table data={data?.data} />
      <Stack alignItems={"center"} mt={3} mb={6}>
        <Pagination
          count={Math.ceil((data?.count ?? limit) / limit)}
          color="primary"
          variant="outlined"
          page={page}
          onChange={handlePageChange}
          disabled={isLoading}
        />
      </Stack>
    </>
  );
}
