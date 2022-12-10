import React, { useContext, useEffect } from "react";

import TableHead from "./TableHead/TableHead";
import Pagination from "./TableBody/Pagination";
import ImagesModal from "./TableBody/ImagesModal";
import TableBody from "./TableBody/TableBody";

import {
  SearchContext,
  SortContext,
  ImagesModalContext,
  PaginationContext,
} from "../../../context";

const Table = () => {
  const { searchInput } = useContext(SearchContext)!;
  const { sort } = useContext(SortContext)!;
  const { showImagesModal } = useContext(ImagesModalContext)!;

  const {
    paginationIndex,
    setPaginationIndex,
    setMinPageNumber,
    setMaxPageNumber,
  } = useContext(PaginationContext)!;

  useEffect(() => {
    if (paginationIndex > 1) {
      setPaginationIndex(1);
      setMinPageNumber(1);
      setMaxPageNumber(5);
    }
  }, [sort, searchInput]);

  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <TableHead />
              <TableBody />
            </table>
          </div>
        </div>
      </div>
      <Pagination />
      {showImagesModal && <ImagesModal />}
    </div>
  );
};

export default Table;
