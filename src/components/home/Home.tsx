import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Image from "next/image";
import FilterById from "../filters/FilterById";
import SortByUnit from "../filters/SortByUnit";
import Table from "../table/Table";
import Pagination from "../pagination/Pagination";
import { UnitObj } from "../../types/UnitObj.type";
import { fetchPageData, fetchAllData } from "../../services/getData";

// Home
const Home = () => {
  const [tableData, setTableData] = useState<UnitObj[]>([]);
  const [data, setData] = useState<UnitObj[]>([]);
  const [unitSort, setUnitSort] = useState<string>("unit_id");
  const [unitId, setUnitId] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchAllData().then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    fetchPageData(unitSort, page, unitId).then((res) => {
      setTableData(res);
    });
  }, [unitSort, page]);

  const handleFilter = (unitId: string) => {
    if (unitId?.trim() !== "") {
      const results = data?.filter((item: any) => item["unit_id"] == unitId);
      setTableData(results);
    } else {
      setTableData(data.slice(0, 5));
    }
  };

  useEffect(() => {
    handleFilter(unitId);
  }, [unitId]);

  return (
    <div className={`${styles.home} container`}>
      <h2>Dashboard</h2>
      <div className={styles.head}>
        <Image
          src={"/imgs/home.svg"}
          className={styles.img}
          alt={"home"}
          width={20}
          height={20}
        />
        <>
          <span className={styles.link}>Home</span>
          <span>{`>`}</span>
          <span className={styles.link}>Dashboard</span>
        </>
      </div>

      <div className={styles.filters}>
        <FilterById
          filterId={(id: string) => {
            setUnitId(id);
          }}
        />
        <SortByUnit
          sortUnit={(unit: string) => {
            setUnitSort(unit);
          }}
        />
      </div>
      {tableData?.length > 0 ? (
        <>
          <Table data={tableData} />
          <Pagination
            dataLength={data.length}
            objsPerPage={5}
            handlePage={setPage}
          />
        </>
      ) : (
        <div className={styles["not-found"]}>
          <Image
            src="/imgs/not-found.png"
            alt="not-found"
            width={150}
            height={150}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
