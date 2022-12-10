import { createContext, useState } from "react";

export const ImagesModalContext = createContext(null);

export const ImagesModalContextProvider = ({ children }) => {
  const [showImagesModal, setShowImagesModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
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
