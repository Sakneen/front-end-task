import { useContext } from "react";
import { counterContext } from "./context/store";
import $ from "jquery";
import Carousel from "react-bootstrap/Carousel";

const Images = () => {
  let { photo }: any = useContext(counterContext);

  function closepage() {
    $("#page").css("visibility", "hidden");
  }

  return (
    <div
      id="page"
      className=" d-flex justify-content-center align-items-center visually position-fixed start-0 end-0 top-0 bottom-0 vh-100 "
    >
      <div className=" position-absolute start-0 end-0 top-0 bottom-0 back"></div>

      <div className="position-relative d-flex justify-content-center align-items-center w-50 overflow-hidden rounded">
        <div className="close position-absolute top-0 end-0 bg-white me-4 mt-4 rounded-circle overflow-hidden d-flex justify-content-center align-items-center pt-1">
          <button className=" border-0 text-black " onClick={closepage}>
            <h2 className=" bg-white">x</h2>
          </button>
        </div>

        <Carousel variant="dark" className=" w-100 ">
          <Carousel.Item>
            <img src={photo[0]} alt="First slide" height="450" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={photo[1]} alt="Second slide" height="450" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={photo[2]} alt="Third slide" height="450" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Images;
