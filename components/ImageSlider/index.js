import { useState } from "react";
import styles from "./styles.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ImageSlider = ({ sliderImages, open, onClose }) => {
  const [index, setIndex] = useState(0);

  return (
    open && (
      <div
        className={styles.overlay}
        onClick={(e) => {
          if (e.target.className === styles.overlay) onClose();
        }}
      >
        <img
          src="/left-arrow.png"
          alt="left arrow"
          className={styles.arrow}
          onClick={() =>
            setIndex((index - 1 + sliderImages.length) % sliderImages.length)
          }
        />
        <Zoom>
          <img
            src={sliderImages[index]}
            alt="unit image"
            className={styles.image}
          />
        </Zoom>
        <img
          src="/right-arrow.png"
          alt="right image"
          className={styles.arrow}
          onClick={() => setIndex((index + 1) % sliderImages.length)}
        />
      </div>
    )
  );
};
export default ImageSlider;
