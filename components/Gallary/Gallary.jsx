import React, { useState } from 'react'
import styles from "./gallary.module.css"
export default function Gallary({images}) {
  return (
    <div className='row justify-content-center'>{
      images?.map(img => {
        return <img className={` col-5 p-0 m-2 ${styles.myImg}`} style={{border:"1px solid #ffffffad"}} src={img} alt=""  />
      })
    }</div>
  )

}



