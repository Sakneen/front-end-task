import { useGetData, useDebounce } from "@/hooks";
import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { ImagePreview } from "./ImagePreview/ImagePreview";
import { SaleTag } from "./SaleTag/SaleTag";
import { StyledTableRow } from "./StyledTableRow/StyledTableRow";
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

  return (
    <>
      <TableFilters
        inputValue={input}
        selectValue={sort}
        onInputChange={handleInputChange}
        onSelectChange={handleSortChange}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Unit ID</TableCell>
              <TableCell>Unit Type</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Build up area</TableCell>
              <TableCell>For sale</TableCell>
              <TableCell>Gallery</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.map((x) => {
              return (
                <StyledTableRow key={x.unit_id}>
                  <TableCell>
                    <Typography>{x.unit_id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{x.unit_type}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {(x.total_price / 1000000).toFixed(2)}M EGP
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{x.bua} m&sup2;</Typography>
                  </TableCell>
                  <TableCell>
                    <SaleTag forSale={x.for_sale} />
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <ImagePreview imgSrc={x.photos?.[0]} />
                    </Typography>
                  </TableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack alignItems={"center"} mt={3} mb={6}>
        <Pagination
          count={Math.ceil((data?.count ?? limit) / limit)}
          color="primary"
          variant="outlined"
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
}
