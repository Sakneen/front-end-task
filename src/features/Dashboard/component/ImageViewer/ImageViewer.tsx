import React, { useEffect, useState } from "react";
import { Dialog, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

const buttonStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "transparent",
  color: "white",
};

interface Props {
  images: Array<string>;
  open: boolean;
  onClose: () => void;
}

export const ImageViewer = ({ images, open, onClose }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Support changing the images by the arrow keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else if (event.key === "ArrowRight") {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex, images.length]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <IconButton
        onClick={handlePreviousImage}
        disabled={images.length <= 1}
        aria-label="Previous Image"
        sx={buttonStyles}
      >
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>

      <IconButton
        onClick={handleNextImage}
        disabled={images.length <= 1}
        aria-label="Next Image"
        sx={{
          ...buttonStyles,
          right: 0,
        }}
      >
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>

      <IconButton
        onClick={onClose}
        aria-label="Close"
        sx={{
          position: "absolute",
          top: 15,
          right: 15,
          color: "white",
          "&:hover": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>

      <img
        src={images[currentImageIndex]}
        alt={`Property Image ${currentImageIndex + 1}`}
      />
    </Dialog>
  );
};
