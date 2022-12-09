import React, { useEffect, useState } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import axios from "axios";
import Pagination from "./Pagination";

const Table = ({ sort, searchInput }) => {
  const [showImagesModal, setShowImagesModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [totalListings, setTotalListings] = useState(0);

  useEffect(() => {
    if (searchInput === "") {
      axios
        .get(
          `http://localhost:3005/listings?_limit=10&_page=${paginationIndex}&_sort=${sort}`
        )
        .then((res) => {
          setTotalListings(res.headers["x-total-count"]);
          setListings(() => res.data);
        });
    } else {
      axios
        .get(
          `http://localhost:3005/listings?_limit=10&_page=${paginationIndex}&_sort=${sort}&unit_id_like=${searchInput}`
        )
        .then((res) => {
          setTotalListings(res.headers["x-total-count"]);
          setListings(() => res.data);
        });
    }

    return () => {};
  }, [paginationIndex, sort, searchInput]);

  console.log(filteredListings);

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
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {listing.for_sale ? "FOR SALE" : "NOT FOR SALE"}
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
      <Pagination
        totalListings={totalListings}
        paginationIndex={paginationIndex}
        setPaginationIndex={setPaginationIndex}
      />
      {showImagesModal && (
        <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-40">
          <ChevronLeftIcon
            className="w-10 text-white"
            onClick={() => modalIndex > 0 && setModalIndex(modalIndex - 1)}
          />
          <div
            className="h-96 w-[80%] max-w-[600px] bg-white bg-cover bg-center m-10 relative"
            style={{
              backgroundImage: `url(${modalImages[modalIndex]})`,
            }}
          >
            <XMarkIcon
              className="absolute top-5 right-5 h-7 w-7 p-1.5 bg-white text-[#0E1024] rounded-full cursor-pointer"
              onClick={() => {
                setModalImages([]);
                setModalIndex(0);
                setShowImagesModal(false);
              }}
            />
          </div>
          <ChevronRightIcon
            className="w-10 text-white"
            onClick={() =>
              modalIndex < modalImages.length - 1 &&
              setModalIndex(modalIndex + 1)
            }
          />
        </div>
      )}
    </div>
  );
};

export default Table;
