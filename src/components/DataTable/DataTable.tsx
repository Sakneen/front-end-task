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
  const [sort, setSort] = useState("unit_id");
  const [page, setPage] = useState(1);

  const handleFilterChange = (val: string) => {
    setFilter(val);
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
        inputValue={filter}
        selectValue={sort}
        onInputChange={handleFilterChange}
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
            <StyledTableRow>
              <TableCell>
                <Typography>Id 144324</Typography>
              </TableCell>
              <TableCell>
                <Typography>Id 144324</Typography>
              </TableCell>
              <TableCell>
                <Typography>Id 144324</Typography>
              </TableCell>
              <TableCell>
                <Typography>Id 144324</Typography>
              </TableCell>
              <TableCell>
                <SaleTag forSale />
              </TableCell>
              <TableCell>
                <Typography>
                  <ImagePreview imgSrc="https://freeaussiestock.com/free/South_Australia/slides/river_torrens.jpg" />
                </Typography>
              </TableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack alignItems={"center"} mt={3}>
        <Pagination
          count={10}
          color="primary"
          variant="outlined"
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
}
