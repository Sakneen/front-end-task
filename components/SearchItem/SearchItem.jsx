import React from 'react'
import styles from "./SearchItem.module.css"
export default function SearchItem({ unit_id, unit_type, total_price, for_sale, photos }) {
  return (
    <div
      className={styles.SearchItem}
    >
      <div className={styles.info}>
        <div className={styles.info_item}>{unit_type}</div>
        <div className={styles.info_item}>$ {total_price}</div>
        <div className={styles.info_item}>{for_sale ? "avilable" : "sold"}</div>
      </div>
      <div className=' d-flex justify-content-around flex-wrap'>
        {
          photos.map(photo=>{
            return <img className='m-2'   style={{width:200}} src={photo} alt="" />
          })
        }
      </div>
    </div>
  )
}
