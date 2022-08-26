import React, { useMemo, useState } from "react";
import Pagination from "../components/Pagination";

import { TextInput, UnitsTable } from "../components";
import dashboardStyles from "../styles/Dashboard.module.css";

const pageSize = 5;

const Dashboard = ({ units = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const rows = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return units.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div>
      <h5 className={dashboardStyles.title}>Dashboard</h5>

      <div style={{ marginBlockEnd: 20 }}>
        <div>
          <span>Filters by ID:</span>
          <TextInput
            placeholder="ex: 45785"
            value=""
            onChangeText={(text) => console.log(text)}
          />
        </div>
      </div>

      <UnitsTable rows={rows} />

      <Pagination
        currentPage={currentPage}
        totalCount={units.length}
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
