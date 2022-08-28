import Image from 'next/image';
import { Navigation, Pagination, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';

import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { closeGallary } from '../../lib/features/gallarySlice';

const GallarySwiper = () => {
  const dispatch = useAppDispatch();
  const { images } = useAppSelector(({ gallary }) => gallary);
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      lazy={true}
      modules={[Pagination, Navigation, Lazy]}
      className="translate-y-[80%] sm:translate-y-[20%] md:translate-y-[15%]"
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <figure className="aspect-[8/5] max-h-[80vh] max-w-[90vw] relative left-1/2 translate-x-[-50%] swiper-lazy">
            <Image
              alt=""
              src={image}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded"
            />
            <button
              className="absolute bg-white  w-8 h-8 top-2 right-2 rounded-full transition-colors hover:bg-slate-300"
              onClick={() => dispatch(closeGallary())}
            >
              <Image src="/close-icon.svg" alt="close" width={10} height={10} />
            </button>
          </figure>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallarySwiper;
