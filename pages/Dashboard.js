import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import SelectButton from "../components/SelectButton";
import UnitsTable from "../components/UnitsTable";
import styles from "../styles/dashboard.module.css";
import services from "../services";

const Dashboard = () => {
  const sortOptions = ["Unit ID", "Unit type", "Unit price"];
  const [sortValue, setSortValue] = useState(sortOptions[0]);
  const [units, setUnits] = useState([]);

  const loadMore = async () => {
    const response = await services.getUnits({
      params: {
        _page: 1,
        _limit: 5,
        //  _sort: ,
        //  _order: ,
        //  unitId: ,
      },
    });
    setUnits(response.data);
  };
  useEffect(() => {
    loadMore();
  }, []);

  return (
    <div className="container">
      <nav className={styles.nav}>
        <Link href="/" target="_blank">
          <span className={styles.logo}>
            <Image src="/fav.png" alt="Sakneen Logo" width={25} height={25} />
          </span>
        </Link>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.subtitle}>Dashboard</h1>
        <div className={styles.breadcrumbs}>
          <span className={styles.logo}>
            <Image src="/home.png" alt="home icon" width={16} height={16} />
          </span>
          <Link href="/">Home</Link>
          <span>&gt;</span>
          <span>Dashboard</span>
        </div>
        <div className={styles.controllers}>
          <span>
            <span className={styles.filter}>Filters by ID:</span>
            <input className={styles.input} placeholder="ex: 56487" />
          </span>
          <span className={styles.sort}>
            <Image src="/sort.png" alt="sort icon" width={16} height={16} />
            <span>sort by:</span>
            <SelectButton
              value={sortValue}
              options={sortOptions}
              onChange={(value) => {
                setSortValue(value);
              }}
            />
          </span>
        </div>
        <div className={styles.tableContainer}>
          {units.length ? <UnitsTable units={units} /> : <CircularProgress />}
        </div>
      </main>
      <footer>
        <a href="mailto:info@sakneen.com "> Contact us: info@sakneen.com</a>
      </footer>
    </div>
  );
};

export default Dashboard;
