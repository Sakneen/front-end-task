import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Select, TextInput, Pagination } from "../components/shared";
import UnitsTable from "../components/unit-table";

import dashboardStyles from "../styles/Dashboard.module.css";

const pageSize = 5;
const sortOptions = [
  {
    label: "Unit ID",
    value: "unit_id",
  },
  {
    label: "Unit type",
    value: "unit_type",
  },
  {
    label: "Unit Price",
    value: "total_price",
  },
];

const Dashboard = ({ units = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortValue, setSortValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const filterdData = useMemo(() => {
    let finalForamtedData = units;

    if (searchValue.length) {
      finalForamtedData = finalForamtedData.filter((unit) =>
        unit?.["unit_id"]
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      );
    }

    if (sortValue.length) {
      if (sortValue === "total_price") {
        finalForamtedData = finalForamtedData.sort(
          (a, b) => b?.["total_price"] - a?.["total_price"]
        );
      } else {
        finalForamtedData = finalForamtedData.sort((a, b) =>
          a?.[sortValue]?.toString()?.localeCompare(b?.[sortValue])
        );
      }
    }

    return finalForamtedData;
  }, [units, searchValue, sortValue]);

  const rows = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filterdData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filterdData, sortValue]);

  //

  const handleSearch = useCallback((value) => {
    setCurrentPage(1);
    setSearchValue(value);
  }, []);

  const handleSort = useCallback((value) => {
    setCurrentPage(1);
    setSortValue(value);
  }, []);

  //

  return (
    <div>
      <h5 className={dashboardStyles.title}>Dashboard</h5>

      <div className={dashboardStyles.breadcrumbs}>
        <Image src="/home.svg" alt="home icon" width={16} height={16} />

        <Link href="/">Home</Link>

        <span>&gt;</span>

        <span>Dashboard</span>
      </div>

      <div className={dashboardStyles.toolbar}>
        <div>
          <span className={dashboardStyles.filterTitle}>Filters by ID:</span>
          <TextInput
            placeholder="ex: 45785"
            value={searchValue}
            onChangeText={handleSearch}
          />
        </div>

        <div className={dashboardStyles.sortContainer}>
          <Image
            src={"/sort.png"}
            alt="Sort"
            width={15}
            height={15}
            objectFit="contain"
          />

          <span>Sort by: </span>

          <Select
            options={sortOptions}
            value={sortValue}
            onChangeVlue={handleSort}
          />
        </div>
      </div>

      <UnitsTable rows={rows} />

      <Pagination
        currentPage={currentPage}
        totalCount={filterdData.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const unitsResponse = await fetch("http://localhost:3005/listings");
  const units = await unitsResponse.json();

  return {
    props: {
      units,
    },
  };
};

export default Dashboard;
