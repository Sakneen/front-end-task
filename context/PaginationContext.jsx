import { createContext, useState } from "react";

export const PaginationContext = createContext(null);

export const PaginationContextProvider = ({ children }) => {
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [maxItems, setMaxItems] = useState(0);
  const [totalListings, setTotalListings] = useState(0);
  const [maxPageNumber, setMaxPageNumber] = useState(5);
  const [minPageNumber, setMinPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleNextClick = () => {
    if (paginationIndex < maxItems) {
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

  const value = {
    paginationIndex,
    setPaginationIndex,
    maxItems,
    setMaxItems,
    totalListings,
    setTotalListings,
    maxPageNumber,
    minPageNumber,
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
