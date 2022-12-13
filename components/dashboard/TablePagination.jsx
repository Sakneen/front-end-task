//MUI
import { Pagination, PaginationItem } from "@mui/material";

//Constants
import { numberOfPages } from "../../constants";

const TablePagination = ({ page, changePage }) => {
 return (
  <div className="w-full p-4 flex items-center justify-center">
   <Pagination
    onChange={changePage}
    count={numberOfPages}
    color="primary"
    page={page}
    renderItem={(item) =>
     item.type === "previous" || item.type === "next" ? (
      <PaginationItem {...item} className="bg-transparent" />
     ) : (
      <PaginationItem {...item} className="bg-[#E5E5E5]" />
     )
    }
   />
  </div>
 );
};

export default TablePagination;
