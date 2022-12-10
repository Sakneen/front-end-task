import React from "react";
import { createContext, useState } from "react";
import { imagesModalContext } from "../types/Contexts";

export const ImagesModalContext = createContext<imagesModalContext | null>(
  null
);

export const ImagesModalContextProvider = ({ children }) => {
  const [showImagesModal, setShowImagesModal] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  const value = {
    showImagesModal,
    setShowImagesModal,
    modalImages,
    setModalImages,
    modalIndex,
    setModalIndex,
  };

  return (
    <ImagesModalContext.Provider value={value}>
      {children}
    </ImagesModalContext.Provider>
  );
};
