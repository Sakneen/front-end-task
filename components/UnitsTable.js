import React from "react";
import Image from "next/image";
import tableStyles from "../styles/UnitsTable.module.css";
import { convertToInternationalCurrencySystem } from "../utils/convertToInternationalCurrencySystem";

const Table = ({ rows = [] }) => {
  if (!rows.length) {
    return <p>No Ros Found</p>;
  }

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
          {rows.map((item) => (
            <tr key={item["_id"]}>
              <td>{item.unit_id}</td>

              <td>{item.unit_type}</td>

              <td>
                {convertToInternationalCurrencySystem(item.total_price)} EGP
              </td>

              <td>
                {item.bua} <var>m</var>
                <sup>2</sup>
              </td>

              <td>
                <span
                  className={
                    item.for_sale ? tableStyles.forSale : tableStyles.notForSale
                  }
                >
                  {item.for_sale ? "FOR SALE" : "NOT FOR SALE"}
                </span>
              </td>

              <td>
                {item.photos[0] && (
                  <Image
                    src={item.photos[0]}
                    width={40}
                    height={40}
                    alt={item.photos[0]}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
