import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import FilterSort from "./FilterSort/FilterSort";
import Table from "./Table/Table";

export default function Dashboard() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 flex-grow">
      <BreadCrumbs />
      <FilterSort />
      <Table />
    </div>
  );
}
