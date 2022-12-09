import React, { useState } from "react";
import BreadCrumbs from "./BreadCrumbs";
import FilterSort from "./FilterSort";
import Pagination from "./Pagination";
import Table from "./Table";

export default function Dashboard() {
  const [sort, setSort] = useState("unit_id");
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="px-4 sm:px-6 lg:px-8 flex-grow">
      <BreadCrumbs />
      <FilterSort
        setSort={setSort}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Table sort={sort} searchInput={searchInput} />
    </div>
  );
}
