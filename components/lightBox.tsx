import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import { HomeType } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { Dispatch, SetStateAction } from 'react';

type Props = {
    selectedHome: HomeType
    setOpen: Dispatch<SetStateAction<boolean>>
}
export default function LightBox({ selectedHome, setOpen }: Props) {
    const swiper = useSwiper();

    return (
        <Swiper
            slidesPerView={1}
            navigation={
                {
                    nextEl: '#next',
                    prevEl: '#prev',
                }
            }
            modules={[Navigation]}
            className='w-screen z-50 flex justify-center place-items-center place-content-center'
        >
            {selectedHome?.photos.length === 0
                ?
                <SwiperSlide>
                    <p className='text-center text-lg border bg-white w-[960px] mx-auto mt-14'>Unfortunately, there are no photos currently for the selected property. Please check back again soon.</p>
                </SwiperSlide>
                : selectedHome?.photos?.map((photo, i) =>
                    <SwiperSlide key={i}>
                        <img className=' w-[960px] aspect-video mx-auto max-h-[600px]' src={photo} />
                    </SwiperSlide>
                )}
            <button
                onClick={() => setOpen(false)}
                className='absolute z-50 text-black w-5 h-5 md:w-7 md:h-7 top-2 md:top-[15px] right-2 lg:max-xl:right-12 xl:right-56 rounded-full bg-white'
            >
                <XMarkIcon className='p-1 ' />
            </button>
            <button
                id='prev'
                className='text-white absolute sm:bottom-[70px] md:bottom-[200px] left-0 md:left-[50px] z-50'
            >
                <ChevronLeftIcon className='h-20 w-20' />
            </button>
            <button
                id='next'
                className='text-white absolute sm:bottom-[70px] md:bottom-[200px] right-0 md:right-[50px] z-50'
            >
                <ChevronRightIcon className='h-20 w-20' />
            </button>
        </Swiper>
    );
};