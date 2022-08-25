import React from "react";

import Table from "../components/UnitsTable";
import dashboardStyles from "../styles/Dashboard.module.css";

const dashboard = ({ units = [] }) => {
  const rows = units.slice(10, 15); //TODO: add state to apply pagination

  return (
    <div>
      <h5 className={dashboardStyles.title}>Dashboard</h5>

      <Table rows={rows} />
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

export default dashboard;
