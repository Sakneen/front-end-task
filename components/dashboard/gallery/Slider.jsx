//Icons
import { XMarkIcon } from "@heroicons/react/24/outline";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Slider = ({ gallery, setOpen }) => {
 return (
  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
   {gallery.map((photo) => (
    <SwiperSlide key={photo} className="relative">
     <div
      style={{
       backgroundImage: `url(${photo})`,
       backgroundSize: "cover",
      }}
      className="relative w-full h-[600px]"
     >
      <button
       type="button"
       className="absolute inline-flex top-7 right-7 items-center rounded-full border border-transparent bg-white p-1 focus:outline-none   "
       onClick={() => setOpen(false)}
      >
       <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
     </div>
    </SwiperSlide>
   ))}
  </Swiper>
 );
};

export default Slider;
