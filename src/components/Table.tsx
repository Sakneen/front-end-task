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
    <div className={styles.dashboard__table}>
      <div className={styles.dashboard__table__head}>
        <div className="row">
          <div className="col-2">Unit ID</div>
          <div className="col-2">Unit type</div>
          <div className="col-2">Price</div>
          <div className="col-2">Build up area</div>
          <div className="col-2">For sale</div>
          <div className="col-2">Gallery</div>
        </div>
      </div>

      <div className={styles.dashboard__table__body}>
        {units &&
          units.map((unit) => (
            <div
              key={unit._id}
              className={`row ${styles.dashboard__table__body__row}`}
            >
              <div className="col-2">{unit.unit_id}</div>
              <div className="col-2">{unit.unit_type}</div>
              <div className="col-2">
                {(unit.total_price / 1000000).toFixed(1)}M EGP
              </div>
              <div className="col-2">{unit.bua} m&sup2;</div>
              <div className="col-2">
                {unit.for_sale ? "FOR SALE" : "NOT FOR SALE"}
              </div>
              <div className="col-2">
                {unit.photos.length ? (
                  <Image
                    src={unit.photos[0]}
                    alt="unit"
                    width={40}
                    height={40}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
