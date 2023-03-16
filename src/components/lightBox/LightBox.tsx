import styles from "./LightBox.module.scss";
import SliderSlick from "../slider/SliderSlick";
import Image from "next/image";

type IProps = {
  gallery: string[];
  handleCloseBox: Function;
};
const LightBox = (props: IProps) => {
  const { gallery, handleCloseBox } = props;

  return (
    <div className={styles.lightBox}>
      <SliderSlick
        slidesToShow={1}
        slidesToShowlaptop={1}
        slidesToShowtablet={1}
        slidesToShowmobile={1}
        showArrows={true}
        onChangeIndex={() => {}}
      >
        {gallery.map((photo: string, index) => (
          <div className={styles["imgs"]} key={index}>
            <p className={styles.close} onClick={() => handleCloseBox()}>
              &#x2716;
            </p>
            <Image src={photo} width={400} height={400} alt="gallery" />
          </div>
        ))}
      </SliderSlick>
    </div>
  );
};

export default LightBox;
