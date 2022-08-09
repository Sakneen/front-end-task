import humanize from "humanize-num";
import { useState } from "react";

import ImageSlider from "../ImageSlider";
import Tag from "../Tag/index";
import styles from "./styles.module.css";

const UnitsTable = ({ units = [] }) => {
  const [sliderImages, setSliderImages] = useState([]);
  if (!units.length) return <div>No units to show</div>;

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Unit ID</th>
            <th>Unit Type</th>
            <th>Price</th>
            <th>Build up area</th>
            <th>For sale</th>
            <th>Gallery</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit) => (
            <tr key={unit._id}>
              <td>{unit.unit_id}</td>
              <td>{unit.unit_type}</td>
              <td>{humanize(unit.total_price, 2)} EGP</td>
              <td>
                {unit.bua} m<sup>2</sup>
              </td>
              <td>
                {unit.for_sale ? (
                  <Tag text="FOR SALE" color="#2419BE" />
                ) : (
                  <Tag text="NOT FOR SALE" color="#616161" />
                )}
              </td>
              <td>
                <img
                  src={unit.photos[0] ?? "/imgs/fav.png"}
                  alt="unit image"
                  width={40}
                  height={40}
                  onClick={() => {
                    setSliderImages(unit.photos);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ImageSlider
        sliderImages={sliderImages}
        open={Boolean(sliderImages.length)}
        onClose={() => setSliderImages([])}
      />
    </>
  );
};
export default UnitsTable;
