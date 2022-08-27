import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";

import modalstyles from "../../styles/shared-component-styles/ImagesModal.module.css";

const ImagesModal = ({ isOpen = false, onClose = () => null, images = [] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handelNextPress = useCallback(
    () => setImageIndex((oldImage) => ++oldImage),
    []
  );
  const handelPrevPress = useCallback(
    () => setImageIndex((oldImage) => --oldImage),
    []
  );

  const imagesToPreview = useMemo(
    () => images.filter((image) => image?.length),
    [images]
  );
  const isNextAvilable = imageIndex < imagesToPreview.length - 1;
  const isPrevAvilable = imageIndex > 0;

  return (
    isOpen &&
    imagesToPreview[imageIndex] && (
      <div id="myModal" className={modalstyles.modal}>
        <div className={modalstyles.modalContent}>
          <div className={modalstyles.imageContainer}>
            <Image
              alt="Unit"
              src={imagesToPreview[imageIndex]}
              className={modalstyles.image}
              layout="fill"
              loading="lazy"
              placeholder="empty"
            />
          </div>

          {isNextAvilable && (
            <span className={modalstyles.next} onClick={handelNextPress}>
              ❯
            </span>
          )}

          {isPrevAvilable && (
            <span className={modalstyles.prev} onClick={handelPrevPress}>
              ❮
            </span>
          )}
        </div>

        <div className={modalstyles.closeContainer} onClick={onClose}>
          <span className={modalstyles.close}>&times;</span>
        </div>
      </div>
    )
  );
};

export default ImagesModal;
