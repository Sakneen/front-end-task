import React from "react";
import Image from "next/image";
import tableStyles from "../styles/UnitsTable.module.css";
import { convertToInternationalCurrencySystem } from "../utils/convertToInternationalCurrencySystem";

const UnitsTable = ({ rows = [] }) => {
  return (
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
            rows.map((row) => (
              <tr key={row["_id"]}>
                <td>{row.unit_id}</td>

                <td>{row.unit_type}</td>

                <td>
                  {convertToInternationalCurrencySystem(row.total_price)} EGP
                </td>

                <td>
                  {row.bua} <var>m</var>
                  <sup>2</sup>
                </td>

                <td>
                  <span
                    className={
                      row.for_sale
                        ? tableStyles.forSale
                        : tableStyles.notForSale
                    }
                  >
                    {row.for_sale ? "FOR SALE" : "NOT FOR SALE"}
                  </span>
                </td>

                <td>
                  {row.photos[0] ? (
                    <Image
                      src={row.photos[0]}
                      width={40}
                      height={40}
                      alt={row.photos[0]}
                    />
                  ) : (
                    <span> &#8212;</span>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {!Boolean(rows.length) && (
        <div className={tableStyles.emptyRows}>
          <span>oops... no untis found!</span>
        </div>
      )}
    </div>
  );
};

export default UnitsTable;
