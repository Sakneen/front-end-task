import React from "react";
import Slider from "react-slick";
import Image from "next/image";

type IProps = {
  slidesToShow: number;
  slidesToShowlaptop: number;
  slidesToShowtablet: number;
  slidesToShowmobile: number;
  children: any;
  showArrows: boolean;
  onChangeIndex: Function;
  className?: string;
};

const SliderSlick = (props: IProps) => {
  const slider: any = React.useRef();

  const {
    slidesToShow,
    slidesToShowlaptop,
    slidesToShowtablet,
    slidesToShowmobile,
    children,
    showArrows,
    onChangeIndex,
    className,
  } = props;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: slidesToShowlaptop,
          slidesToScroll: slidesToShowlaptop,
          initialSlide: slidesToShowlaptop,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slidesToShowtablet,
          slidesToScroll: slidesToShowtablet,
          initialSlide: slidesToShowtablet,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShowmobile,
          slidesToScroll: slidesToShowmobile,
        },
      },
    ],
    beforeChange: (oldIndex: number, newIndex: number) => {
      if (typeof onChangeIndex === "function") {
        onChangeIndex(newIndex);
      }
    },
  };

  const renderArrows = () => {
    return (
      <div className="" style={{ position: "relative" }}>
        <Image
          onClick={() => {
            slider?.current?.slickPrev();
          }}
          className="arrow-btn prev"
          width={30}
          height={30}
          src={"/imgs/left-arrow.svg"}
          alt={"left-arrow"}
        />
        <Image
          onClick={() => {
            slider?.current?.slickNext();
          }}
          className="arrow-btn next"
          width={30}
          height={30}
          src={"/imgs/right-arrow.svg"}
          alt={"right-arrow"}
        />
      </div>
    );
  };

  return (
    <div>
      {showArrows && renderArrows()}
      <Slider className={className} ref={slider} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default SliderSlick;
