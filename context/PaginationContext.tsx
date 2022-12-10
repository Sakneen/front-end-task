import React from "react";
import { createContext, useState } from "react";
import { paginationContext } from "../types/Contexts";

export const PaginationContext = createContext<paginationContext | null>(null);

export const PaginationContextProvider = ({ children }) => {
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const [maxPageNumber, setMaxPageNumber] = useState(5);
  const [minPageNumber, setMinPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleNextClick = () => {
    if (paginationIndex < maxPages) {
      setPaginationIndex((paginationIndex) => paginationIndex + 1);
      if (paginationIndex === maxPageNumber) {
        setMaxPageNumber((maxPageNumber) => maxPageNumber + itemsPerPage);
        setMinPageNumber((minPageNumber) => minPageNumber + itemsPerPage);
      }
    }
  };

  const handlePrevClick = () => {
    if (paginationIndex > 1) {
      setPaginationIndex((paginationIndex) => paginationIndex - 1);
      if (paginationIndex === minPageNumber) {
        setMaxPageNumber((maxPageNumber) => maxPageNumber - itemsPerPage);
        setMinPageNumber((minPageNumber) => minPageNumber - itemsPerPage);
      }
    }
  };

  const value: paginationContext = {
    paginationIndex,
    setPaginationIndex,
    maxPages,
    setMaxPages,
    maxPageNumber,
    minPageNumber,
    setMinPageNumber,
    setMaxPageNumber,
    itemsPerPage,
    setItemsPerPage,
    handleNextClick,
    handlePrevClick,
  };

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};
