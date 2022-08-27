/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import { usePagination, DOTS } from "../hooks/usePagination";

import paginationStyles from "../styles/Pagination.module.css";

const Pagination = ({
  onPageChange = () => null,
  totalCount = 35,
  siblingCount,
  currentPage = 1,
  pageSize = 5,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = useCallback(() => {
    onPageChange(currentPage + 1);
  }, [currentPage]);

  const onPrevious = useCallback(() => {
    onPageChange(currentPage - 1);
  }, [currentPage]);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={paginationStyles.paginationContainer}>
      <button
        className={currentPage === 1 ? paginationStyles.disabled : ""}
        onClick={onPrevious}
      >
        ❮
      </button>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li key={DOTS + index.toString()}>&#8230;</li>;
        }

        return (
          <li
            key={pageNumber.toString()}
            onClick={() => onPageChange(pageNumber)}
            className={
              pageNumber === currentPage ? paginationStyles?.disabled : ""
            }
          >
            {pageNumber}
          </li>
        );
      })}

      <button
        className={currentPage === lastPage ? paginationStyles.disabled : ""}
        onClick={onNext}
      >
        ❯
      </button>
    </ul>
  );
};

export default Pagination;
