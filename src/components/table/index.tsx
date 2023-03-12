import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { useQuery } from '@tanstack/react-query';
import { getUnits } from '@/utils/getUnits';
import useDebounce from '@/hooks/useDebounce';
import { Modal } from '@mui/material';
import ModalImgs from './ModalImgs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// type TableProps = {
//   children: ReactNode;
// };
const sortValues = ['Unit ID', 'Unit type', 'Unit Price'];
let formatter = Intl.NumberFormat('en', { notation: 'compact' });

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 16,
  },
  //   [`&.${tableCellClasses.body}`]: {
  //     fontSize: 16,
  //   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.common.white,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function TableList() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [currentSort, setCurrentSort] = useState<string>(sortValues[0]);
  const [pageToFetch, setPageToFetch] = useState<number>(1);
  const [filterValue, setFilterValue] = useState<string>('');
  const debouncedFilter = useDebounce(filterValue, 500);

  const [currentClickedImgs, setCurrentClickedImgs] = useState<string[] | null>(
    null
  );
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (imgs: string[]) => {
    setOpenModal(true);
    setCurrentClickedImgs(imgs);
  };
  const handleCloseModal = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    // if (reason !== 'backdropClick') {
    setOpenModal(false);
    // }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setAnchorEl(null);
    const clickedText = e.currentTarget.innerText;
    if (clickedText) setCurrentSort(clickedText);
  };

  function handlePageChange(e: React.ChangeEvent<unknown>, value: number) {
    console.log(value);
    // setSelectedPage(value);
    // const valueToFetch = Math.round(value / 2);
    const valueToFetch = value;
    console.log('valueToFetch', valueToFetch);
    setPageToFetch(valueToFetch);
  }

  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterValue(e.target.value);
  }

  const {
    data: units,
    isPreviousData,
    isSuccess,
    isFetching,
    isLoading,
    isError,
    error,
  } = useQuery<units>({
    queryKey: ['units', pageToFetch, currentSort, debouncedFilter],
    queryFn: () => getUnits(pageToFetch, currentSort, debouncedFilter),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  console.log(units);
  console.log(isError);

  return (
    <>
      <Box
        sx={{
          marginBlockEnd: '1em',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          rowGap: '1.2em',
        }}
      >
        {/* //filter by id section  */}
        <Box
          sx={{
            display: 'flex',
            gap: '1em',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: '700' }}
          >
            Filters by ID:
          </Typography>
          <input
            onChange={handleFilterChange}
            type="text"
            style={{ border: 'none', outline: 'none', padding: '0.25em 0.5em' }}
            placeholder="ex: 45785"
            name="filterId"
            id="filterId"
          />
        </Box>

        {/* sort section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/sorticon.svg"
            alt="sort Logo"
            width={18}
            height={18}
            priority
          />
          <Typography
            variant="body2"
            component="span"
            sx={{
              marginInline: '0.5em',
            }}
          >
            Sort by:
          </Typography>
          <Button
            sx={{
              padding: '0',
              color: 'black',
              fontSize: '0.875rem',
            }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={
              <KeyboardArrowDownIcon style={{ maxWidth: 60, maxHeight: 60 }} />
            }
            disableRipple
          >
            {currentSort}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableScrollLock={true}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {sortValues.map((el) => {
              return (
                <MenuItem onClick={handleClose} key={el}>
                  {el}
                </MenuItem>
              );
            })}
            {/* <MenuItem onClick={handleClose} disableRipple>
              Edit
            </MenuItem> */}
          </Menu>
        </Box>
      </Box>

      {units && units.length > 0 ? (
        <>
          {/* table section */}
          <TableContainer
            component={Paper}
            elevation={2}
            sx={{ backgroundColor: 'transparent' }}
          >
            {/* <Paper elevation={3} ></Paper> */}
            <Table
              sx={{ minWidth: 700 }}
              aria-label="customized table"
              size={isSmallScreen ? 'small' : 'medium'}
            >
              <TableHead>
                <TableRow>
                  <StyledHeaderCell align="left">Unit ID</StyledHeaderCell>
                  <StyledHeaderCell align="left">Unit type</StyledHeaderCell>
                  <StyledHeaderCell align="left">Price</StyledHeaderCell>
                  <StyledHeaderCell align="left">
                    Build up area
                  </StyledHeaderCell>
                  <StyledHeaderCell align="left">For sale</StyledHeaderCell>
                  <StyledHeaderCell align="left">Gallery</StyledHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {units?.map((row) => (
                  <StyledTableRow key={row._id}>
                    {/* <StyledTableCell align="left">
                  {isLoading && isFetching ? <Skeleton /> : 'hereee'}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {units.length > 0 ? 'hereee' : <Skeleton />}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {units.length > 0 ? 'hereee' : <Skeleton />}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {units.length > 0 ? 'hereee' : <Skeleton />}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {units.length > 0 ? 'hereee' : <Skeleton />}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {units.length > 0 ? 'hereee' : <Skeleton />}
                </StyledTableCell> */}
                    {/* <StyledTableCell align="left">
                  {!isLoading && isFetching ? <Skeleton /> : row.unit_id}
                </StyledTableCell> */}
                    <StyledTableCell align="left">
                      {row.unit_id}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.unit_type}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {`${formatter.format(row.total_price)} EGP`}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.bua} m<sup>2</sup>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Button
                        disableElevation
                        variant="contained"
                        size="small"
                        color={row.for_sale ? 'secondary' : 'primary'}
                        sx={{
                          backgroundColor: row.for_sale ? '#2419BE' : '#616161',
                          color: 'white',
                        }}
                      >
                        {row.for_sale ? 'FOR SALE' : 'NOT FOR SALE'}
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.photos[0] ? (
                        <Image
                          src={row.photos[0]}
                          alt="unit pic"
                          width={40}
                          height={40}
                          priority
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleOpenModal(row.photos)}
                        />
                      ) : (
                        'No Pics Founds'
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination section */}
          <Pagination
            size={isSmallScreen ? 'small' : 'medium'}
            onChange={handlePageChange}
            count={10}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBlockStart: '1em',
            }}
            color="primary"
            renderItem={(item) => {
              // console.log(item);
              // if (item.selected) {
              //   item.color = 'secondary';
              // } else {
              //   item.color = 'primary';
              // }
              // if (item.type === 'previous') item.color = 'primary';
              return (
                <PaginationItem
                  //     slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                  sx={{
                    backgroundColor:
                      item.type === 'previous' || item.type === 'next'
                        ? 'transparent'
                        : item.selected
                        ? 'secondary'
                        : '#E5E5E5',
                  }}
                  color="secondary"
                />
              );
            }}
          />
        </>
      ) : units && !units.length && !isError ? (
        <Alert variant="filled" severity="info">
          No Data Found
        </Alert>
      ) : (
        <Alert variant="filled" severity="error">
          Error Happend, Be Sure The Server is Working Fine.
        </Alert>
      )}

      {/* modal section */}
      <ModalImgs
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        imgs={currentClickedImgs}
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default TableList;
