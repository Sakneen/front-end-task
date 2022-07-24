import React from 'react'
import { FiInfo } from "react-icons/fi"
import styles from "./Card.module.css"
export default function Card({ unit_type, total_price, for_sale, setShow, photos, setImages }) {

    const whenClick = () => {
        setShow(true)
        setImages(photos)
    }
    return (
        <div className={`card p-3 col-md-3 m-3 ${styles.myCard}`} >
            <h3 className={`heading ${styles.myh3}`}>{unit_type}</h3>
            <div className=' d-flex align-items-center justify-content-between'>
                <div className="leftpart">
                    <div >
                        <h6 class="mb-0">{for_sale ? "avilable" : "sold"}</h6>
                        <div > <span class="text1">Price <span class="text2">$ {total_price}</span></span> </div>
                    </div>
                </div>
                <FiInfo style={{color:"white"}} className={styles.myIcon}  onClick={whenClick} />
            </div>
        </div>
    )
}
