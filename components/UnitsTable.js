import React from "react";
import tableStyles from "../styles/UnitsTable.module.css";
import UnitRow from "./UnitRow";

const UnitsTable = ({ rows = [] }) => (
  <div className={tableStyles.tableContainer}>
    <table className={tableStyles.table}>
      <thead>
        <tr>
          <th>Unit ID</th>

          <th>Unit type</th>

          <th>Price</th>

          <th>Build up area</th>

          <th>For sale</th>

          <th>Gallery</th>
        </tr>
      </thead>

      <tbody>
        {Boolean(rows.length) &&
          rows.map((row) => <UnitRow unit={row} key={row["_id"]} />)}
      </tbody>
    </table>

    {!Boolean(rows.length) && (
      <div className={tableStyles.emptyRows}>
        <span>oops... no untis found!</span>
      </div>
    )}
  </div>
);

export default UnitsTable;
