import Style from "./../styles/Home.module.css";
import Image from "next/image"
import React, { useContext } from 'react';
import { counterContext } from './context/store';
import $ from 'jquery'

const Home = ({ product }: any, props: any) => {

    const { unit_id, total_price, unit_type, bua, for_sale, photos } = product;

    let { showItem }: any = useContext(counterContext);

    function openpage() {
        $("#page").css("visibility", "visible");
    }

    return (
        <div className={Style.row_table}>

            <div className=" row p-3 row_table">
                <div className=" col-sm-2 position-relative py-2">
                    <h6 className=" position-absolute translate-middle-y top-50">{unit_id}</h6>
                </div>
                <div className=" col-sm-2 position-relative ">
                    <h6 className=" position-absolute translate-middle-y top-50">{unit_type}</h6>
                </div>
                <div className=" col-sm-2 position-relative">
                    <h6 className=" position-absolute translate-middle-y top-50">{(total_price / 1000000).toFixed(1) + "M EGP"}</h6>
                </div>
                <div className=" col-sm-2 position-relative">
                    <h6 className=" position-absolute translate-middle-y top-50 position-relative">{bua} m2</h6>
                </div>
                <div className=" col-sm-2 position-relative">
                    <h6 className=" position-absolute translate-middle-y top-50">{for_sale == true ? <div><span className=" text-bg-primary px-2 py-1 rounded-1 fs-6">FOR SALE</span></div> : <div><span className=" text-bg-secondary px-2 py-1 rounded-1 fs-6">NOT FOR SALE</span></div>}</h6>
                </div>
                <div className=" col-sm-2 position-relative">
                    <button className=" border-0" onClick={() => {
                        showItem(product)
                        openpage()
                    }}>
                        <Image className=" position-absolute translate-middle-y top-50" src={photos[0]} width="40" height="40" alt="" />

                    </button>

                </div>

            </div>
        </div>
    );
}

export default Home;