import React, { useContext } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { ImagesModalContext } from "../../../../context/ImagesModalContext";
import Image from "next/image";

const ImagesModal = () => {
  const {
    setShowImagesModal,
    modalImages,
    setModalImages,
    modalIndex,
    setModalIndex,
  } = useContext(ImagesModalContext)!;

  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-40">
      <ChevronLeftIcon
        className="w-10 text-white cursor-pointer"
        onClick={() => modalIndex > 0 && setModalIndex(modalIndex - 1)}
      />
      <div
        className="h-96 w-[80%] max-w-[600px] bg-cover bg-center m-10 relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${modalImages[modalIndex]})`,
        }}
      >
        <div className="absolute h-full w-full top-0 backdrop-blur-sm" />
        <Image
          src={`${modalImages[modalIndex]}`}
          className="z-10 border-none "
          width={600}
          height={400}
        />
        <XMarkIcon
          className="absolute top-5 right-5 h-7 w-7 p-1.5 bg-white text-[#0E1024] rounded-full cursor-pointer z-10"
          onClick={() => {
            setModalImages([]);
            setModalIndex(0);
            setShowImagesModal(false);
          }}
        />
      </div>
      <ChevronRightIcon
        className="w-10 text-white cursor-pointer"
        onClick={() =>
          modalIndex < modalImages.length - 1 && setModalIndex(modalIndex + 1)
        }
      />
    </div>
  );
};

export default ImagesModal;
