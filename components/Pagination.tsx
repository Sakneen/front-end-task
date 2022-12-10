import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { PaginationContext } from "../context/PaginationContext";

export default function Pagination() {
  const {
    totalListings,
    paginationIndex,
    setPaginationIndex,
    maxItems,
    maxPageNumber,
    minPageNumber,
    handleNextClick,
    handlePrevClick,
    itemsPerPage,
  } = useContext(PaginationContext)!;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-transparent px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex rounded-md"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center bg-transparent border-none px-2 py-2 text-sm font-medium text-gray-500 focus:z-20"
              onClick={handlePrevClick}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

            {minPageNumber > itemsPerPage && (
              <>
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-[#E5E5E5] rounded-full text-[#9E9E9E] mx-2 px-4 py-2 text-sm font-medium focus:z-20"
                >
                  1
                </a>
                <span className="relative inline-flex items-center bg-[#E5E5E5] rounded-full text-[#9E9E9E] mx-2 px-4 py-2 text-sm font-medium">
                  ...
                </span>
              </>
            )}

            {Array.from({ length: totalListings }).map((page, idx) => {
              if (
                idx < maxPageNumber &&
                idx + 1 >= minPageNumber &&
                idx + 1 <= maxItems
              ) {
                return (
                  <a
                    href="#"
                    aria-current="page"
                    className={`relative z-10 inline-flex items-center ${
                      idx + 1 === paginationIndex
                        ? "bg-[#2419BE] text-white"
                        : "bg-[#E5E5E5]"
                    } rounded-full mx-2 px-4 py-2 text-sm font-medium focus:z-20`}
                    onClick={() => setPaginationIndex(idx + 1)}
                  >
                    {idx + 1}
                  </a>
                );
              }
            })}
            {maxPageNumber < maxItems && (
              <>
                <span className="relative inline-flex items-center bg-[#E5E5E5] rounded-full text-[#9E9E9E] mx-2 px-4 py-2 text-sm font-medium">
                  ...
                </span>
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-[#E5E5E5] rounded-full text-[#9E9E9E] mx-2 px-4 py-2 text-sm font-medium focus:z-20"
                >
                  {maxItems}
                </a>
              </>
            )}
            <a
              href="#"
              className="relative inline-flex items-center bg-transparent border-none px-2 py-2 text-sm font-medium text-gray-500 focus:z-20"
              onClick={handleNextClick}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
