import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useSelector } from "react-redux";
import { selectImagesToView } from "redux/Unit";

type TProps = {
  showModal: boolean;
  setShowModal: any;
};

const ImageViewerMain = ({ showModal, setShowModal }: TProps) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = useSelector(selectImagesToView);

  return (
    <>
      {showModal && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setShowModal(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((prev) => (prev + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((prev) => (prev + 1) % images.length)
          }
        />
      )}
    </>
  );
};
export default ImageViewerMain;
