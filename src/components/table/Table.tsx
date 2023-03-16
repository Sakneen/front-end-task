import { useState } from "react";
import Image from "next/image";
import LightBox from "../lightBox/LightBox";
import styles from "./Table.module.scss";
import { UnitObj } from "../../types/UnitObj.type";
type IProps = {
  data: UnitObj[];
};
const Table = (props: IProps) => {
  const data = props.data;
  const [openModal, setOpenModal] = useState(false);
  const [gallery, setGallery] = useState<string[]>([]);

  const columns = [
    "Unit ID",
    "Unit Type",
    "Price",
    "Build up area",
    "For Sale",
    "Gallery",
  ];

  const handleGallery = (photos: string[]) => {
    setOpenModal(true);
    setGallery(photos);
  };

  return (
    <div className={styles.table}>
      <table>
        <tbody>
          <tr>
            {columns.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
          {data.map((item: UnitObj, index: number) => (
            <tr key={index}>
              <td>{item["unit_id"]}</td>
              <td>{item["unit_type"]}</td>
              <td>{item["total_price"]}</td>
              <td>{item.bua}</td>
              <td>
                <span
                  className={`${
                    item["for_sale"] ? styles["forSale"] : styles["notForSale"]
                  }`}
                >
                  {item["for_sale"] ? "for sale" : "not for sale"}
                </span>
              </td>
              <td>
                {item?.photos[0] ? (
                  <Image
                    src={item?.photos[0]}
                    alt={"gallery"}
                    width={30}
                    height={30}
                    className={styles.img}
                    onClick={() => handleGallery(item?.photos)}
                  />
                ) : (
                  "--"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {openModal && (
        <LightBox
          gallery={gallery}
          handleCloseBox={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default Table;
