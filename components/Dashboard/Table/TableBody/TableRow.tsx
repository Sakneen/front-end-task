import React, { useContext } from "react";

import { ImagesModalContext } from "../../../../context";

import { Listing } from "../../../../types/Listing";

type Props = {
  listing: Listing;
  idx: number;
};

const TableRow = ({ listing, idx }: Props) => {
  const { setShowImagesModal, setModalImages } =
    useContext(ImagesModalContext)!;
  return (
    <tr className={idx % 2 === 0 ? "bg-[#F5F5F5]" : ""}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6">
        {listing.unit_id}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
        {listing.unit_type}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
        {(Math.abs(listing.total_price) / 1.0e6).toFixed(1)}M EGP
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
        {listing.bua} m<sup>2</sup>
      </td>
      <td className={`whitespace-nowrap px-3 py-4 text-sm text-white`}>
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
  );
};

export default TableRow;
