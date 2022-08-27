import React, { useCallback, useState } from "react";
import Image from "next/image";
import tableStyles from "../styles/UnitsTable.module.css";
import { convertToInternationalCurrencySystem } from "../utils/convertToInternationalCurrencySystem";
import ImagesModal from "./ImagesModal";

const UnitRow = ({ unit }) => {
  const [imagesModal, setImagesModal] = useState(false);

  const handleRowClick = useCallback(() => {
    if (unit.photos.length) {
      setImagesModal(true);
    }
  }, []);

  return (
    <>
      <tr onClick={handleRowClick}>
        <td>{unit.unit_id}</td>

        <td>{unit.unit_type}</td>

        <td>{convertToInternationalCurrencySystem(unit.total_price)} EGP</td>

        <td>
          {unit.bua} <var>m</var>
          <sup>2</sup>
        </td>

        <td>
          <div
            className={
              unit.for_sale ? tableStyles.forSale : tableStyles.notForSale
            }
          >
            <span>{unit.for_sale ? "FOR SALE" : "NOT FOR SALE"}</span>
          </div>
        </td>

        <td>
          {unit.photos[0] ? (
            <Image
              src={unit.photos[0]}
              width={40}
              height={40}
              alt={unit.photos[0]}
            />
          ) : (
            <span> &#8212;</span>
          )}
        </td>
      </tr>
      <ImagesModal
        isOpen={imagesModal}
        onClose={() => setImagesModal(false)}
        images={unit.photos}
      />
    </>
  );
};

export default UnitRow;
