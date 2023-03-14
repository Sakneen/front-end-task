import Style from "./../styles/Home.module.css";
import React, { useContext } from "react";
import { counterContext } from "./context/store";
import $ from "jquery";

const Home = ({ product }: any, props: any) => {
  let { showItem }: any = useContext(counterContext);
  const { unit_id, total_price, unit_type, bua, for_sale, photos } = product;

  function openpage() {
    $("#page").css("visibility", "visible");
  }

  return (
    <div className={Style.row_table}>
      <div className=" row p-3 ">
        <div className=" col-2 position-relative py-2">
          <h6 className="font_1 position-absolute translate-middle-y top-50 text-center">
            {unit_id}
          </h6>
        </div>
        <div className=" col-2 position-relative ">
          <h6 className="font_1 position-absolute translate-middle-y top-50 text-center">
            {unit_type}
          </h6>
        </div>
        <div className=" col-2 position-relative">
          <h6 className="font_1 position-absolute translate-middle-y top-50">
            {(total_price / 1000000).toFixed(1) + "M EGP"}
          </h6>
        </div>
        <div className=" col-2 position-relative">
          <h6 className="font_1 position-absolute translate-middle-y top-50 position-relative">
            {bua} m2
          </h6>
        </div>
        <div className=" col-2 position-relative">
          <h6 className=" position-absolute translate-middle-y top-50">
            {for_sale == true ? (
              <div className=" pt-3">
                <p className="not_of_sale font_1 text-bg-primary px-2 py-1 rounded-1 fs-6 text-center">
                  FOR SALE
                </p>
              </div>
            ) : (
              <div className=" pt-3">
                <p className="not_of_sale font_1 text-bg-secondary px-2 pt-1 rounded-1 fs-6  text-center">
                  NOT FOR SALE
                </p>
              </div>
            )}
          </h6>
        </div>
        <div className=" col-2 position-relative">
          <button
            className=" border-0"
            onClick={() => {
              showItem(product);
              openpage();
            }}
          >
            <img
              className=" position-absolute translate-middle-y top-50"
              src={photos[0]}
              width="40"
              height="40"
              alt=""
              loading="lazy"
              data-nimg="1"
              decoding="async"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
