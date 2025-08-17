import React from "react";
import { PropertyListing } from "@/types";

interface PropertyCardProps {
  listing: PropertyListing;
}

export default function PropertyCard({ listing }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        {listing.photos && listing.photos.length > 0 ? (
          <img
            src={listing.photos[0]}
            alt={listing.unit_type}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 capitalize">
          {listing.unit_type} – {listing.unit_id}
        </h2>
        <p className="text-indigo-600 font-bold text-lg">
          {listing.total_price.toLocaleString()} EGP
        </p>

        <div className="flex justify-between text-sm text-gray-500">
          <span>{listing.bua ? `${listing.bua} m²` : "Size N/A"}</span>
          <span>{listing.for_sale ? "For Sale" : "Not For Sale"}</span>
        </div>
      </div>
    </div>
  );
}
