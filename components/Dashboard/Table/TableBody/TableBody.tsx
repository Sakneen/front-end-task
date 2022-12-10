import React, { useContext, useEffect, useState } from "react";

import TableRow from "./TableRow";

import {
  SearchContext,
  SortContext,
  PaginationContext,
} from "../../../../context";

import { Listing } from "../../../../types/Listing";
import { getFetch } from "../../../../utils/getFetch";
import { getLastPageIndex } from "../../../../utils/getLastPageIndex";

const TableBody = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const { searchInput } = useContext(SearchContext)!;
  const { sort } = useContext(SortContext)!;
  const { paginationIndex, setMaxPages, itemsPerPage } =
    useContext(PaginationContext)!;

  useEffect(() => {
    if (searchInput === "") {
      getFetch("http://localhost:3005/listings", {
        _page: paginationIndex,
        _sort: sort,
        _limit: itemsPerPage,
      }).then((res) => {
        setMaxPages(getLastPageIndex(res.headers.link!));
        setListings(() => res.data);
      });
    } else {
      getFetch("http://localhost:3005/listings", {
        _page: paginationIndex,
        _sort: sort,
        _limit: itemsPerPage,
        unit_id_like: searchInput,
      }).then((res) => {
        setMaxPages(getLastPageIndex(res.headers.link!));
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
