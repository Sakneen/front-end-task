import React, { useContext, useEffect, useState } from "react";

import Pagination from "./Pagination";
import ImagesModal from "./ImagesModal";

import { PaginationContext } from "../context/PaginationContext";
import { SearchContext } from "../context/SearchContext";
import { SortContext } from "../context/SortContext";
import { ImagesModalContext } from "../context/ImagesModalContext";

import { getFetch } from "../utils/getFetch";
import { Listing } from "../types/Listing";

const Table = () => {
  const { searchInput } = useContext(SearchContext)!;
  const { sort } = useContext(SortContext)!;
  const { showImagesModal, setShowImagesModal, setModalImages } =
    useContext(ImagesModalContext)!;

  const {
    paginationIndex,
    setPaginationIndex,
    maxItems,
    setMaxItems,
    setTotalListings,
    setMinPageNumber,
    setMaxPageNumber,
  } = useContext(PaginationContext)!;

  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    if (searchInput === "") {
      getFetch("http://localhost:3005/listings", {
        _page: paginationIndex,
        _sort: sort,
        _limit: 7,
      }).then((res) => {
        const lastPageIndex = res.headers.link!.split("_page");
        setMaxItems(+lastPageIndex[lastPageIndex.length - 1][1]);
        setTotalListings(+res.headers["x-total-count"]!);
        setListings(() => res.data);
      });
    } else {
      getFetch("http://localhost:3005/listings", {
        _page: paginationIndex,
        _sort: sort,
        _limit: 7,
        unit_id_like: searchInput,
      }).then((res) => {
        const lastPageIndex = res.headers.link!.split("_page");
        setMaxItems(+lastPageIndex[lastPageIndex.length - 1][1]);
        setTotalListings(+res.headers["x-total-count"]!);
        setListings(() => res.data);
      });
    }

    return () => {};
  }, [paginationIndex, sort, searchInput]);

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
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Unit ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Unit Type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Build up area
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    For Sale
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Gallery
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {listings.map((listing, idx) => (
                  <tr
                    key={listing._id}
                    className={idx % 2 === 0 ? "bg-[#F5F5F5]" : ""}
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {listing.unit_id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {listing.unit_type}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {(Math.abs(listing.total_price) / 1.0e6).toFixed(1)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {listing.bua}
                    </td>
                    <td
                      className={`whitespace-nowrap px-3 py-4 text-sm text-white`}
                    >
                      <div
                        className={`${
                          listing.for_sale ? "bg-[#2419BE]" : "bg-[#616161]"
                        } w-fit px-2 py-1.5 rounded-md`}
                      >
                        {listing.for_sale ? "FOR SALE" : "NOT FOR SALE"}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <img
                        src={listing.photos[0] ?? "/placeholder.png"}
                        className="h-10 w-10 cursor-pointer"
                        onClick={() => {
                          if (listing.photos[0]) {
                            setShowImagesModal(true);
                            setModalImages(() => listing.photos);
                          }
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
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
