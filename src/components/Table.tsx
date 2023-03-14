import { FunctionComponent, useState } from "react";
import styles from "@/styles/components/Table.module.css";
import Image from "next/image";
import NoImage from "../../public/No-image.jpg";

interface TableProps {
  units: [
    {
      _id: string;
      unit_id: string;
      unit_type: string;
      total_price: number;
      bua: number;
      for_sale: boolean;
      photos: string[];
    }
  ];
  onLightBoxToggle: Function;
}

const Table: FunctionComponent<TableProps> = ({ units, onLightBoxToggle }) => {
  return (
    <>
      <div className={styles.table}>
        <div className={styles.table__head}>
          <div className={`row ${styles.table__head__row}`}>
            <div className="col-2">Unit ID</div>
            <div className="col-2">Unit type</div>
            <div className="col-2">Price</div>
            <div className="col-2">Build up area</div>
            <div className="col-2">For sale</div>
            <div className="col-2">Gallery</div>
          </div>
        </div>

        <div className={styles.table__body}>
          {units &&
            units.map((unit) => (
              <div key={unit._id} className={`row ${styles.table__body__row}`}>
                <div className="col-2 d-flex align-items-center">
                  <span>{unit.unit_id}</span>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <span>{unit.unit_type}</span>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <span>{(unit.total_price / 1000000).toFixed(1)}M EGP</span>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <span>{unit.bua} m&sup2;</span>
                </div>
                <div
                  className={`col-2 d-flex align-items-center ${
                    styles.table__forsale
                  } ${unit.for_sale ? "" : styles.table__notforsale}`}
                >
                  <span>{unit.for_sale ? "FOR SALE" : "NOT FOR SALE"}</span>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <span>
                    <Image
                      src={unit.photos.length ? unit.photos[0] : NoImage}
                      alt="unit"
                      width={40}
                      height={40}
                      role="button"
                      onClick={() => onLightBoxToggle(unit.photos)}
                    />
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Table;
