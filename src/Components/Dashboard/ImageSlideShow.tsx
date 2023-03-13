import React , {useState , memo , useCallback} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  boxShadow: 24,
  outline : 'none'
};

const ImageSlideShow = ({images , open , handleClose}) => {

  return (

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{backgroundColor : `rgba(0, 0, 0, 0.08)`}}
      >
        <Box sx={style} >
          <IconButton onClick={handleClose} style={{backgroundColor : 'white' , position : 'relative' , right : '-85%' }}>
            <CloseIcon />
          </IconButton>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          style={{userSelect : 'none' , aspectRatio : '3/2' , width : '70%'}}
          navigation
        >
          {images.map((img , imgIndex) => {
            return (
              <SwiperSlide className="" key={imgIndex}>
                <img
                  src={img}
                  className=""
                  alt={img}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        </Box>
      </Modal>

  );
}

export default ImageSlideShow