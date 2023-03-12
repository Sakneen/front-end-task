import styles from "@/styles/components/Table.module.css";
import Image from "next/image";
import { FunctionComponent } from "react";

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
}

const Table: FunctionComponent<TableProps> = ({ units }) => {
  return (
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
                  {unit.photos.length ? (
                    <Image
                      src={unit.photos[0]}
                      alt="unit"
                      width={40}
                      height={40}
                      role="button"
                    />
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
