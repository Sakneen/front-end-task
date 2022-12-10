import React, { useContext, useEffect, useState } from "react";

import TableRow from "./TableRow";

import {
  SearchContext,
  SortContext,
  PaginationContext,
} from "../../../../context";

import { Listing } from "../../../../types/Listing";
import { getFetch } from "../../../../utils/getFetch";

const TableBody = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const { searchInput } = useContext(SearchContext)!;
  const { sort } = useContext(SortContext)!;
  const { paginationIndex, setMaxPages, setTotalListings } =
    useContext(PaginationContext)!;

  useEffect(() => {
    if (searchInput === "") {
      getFetch("http://localhost:3005/listings", {
        _page: paginationIndex,
        _sort: sort,
        _limit: 7,
      }).then((res) => {
        const lastPageIndex = res.headers.link!.split("_page");
        setMaxPages(+lastPageIndex[lastPageIndex.length - 1][1]);
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
        setMaxPages(+lastPageIndex[lastPageIndex.length - 1][1]);
        setTotalListings(+res.headers["x-total-count"]!);
        setListings(() => res.data);
      });
    }

    return () => {};
  }, [paginationIndex, sort, searchInput]);

  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {listings.map((listing, idx) => (
        <TableRow listing={listing} idx={idx} key={listing._id} />
      ))}
    </tbody>
  );
};

export default TableBody;
