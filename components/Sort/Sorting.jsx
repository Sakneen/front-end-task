import React from 'react'
import {BsFillArrowDownCircleFill,BsFillArrowUpCircleFill} from "react-icons/bs"
import styles from "./Sorting.module.css"
function Sorting({GetDataByPageAndSort}) {
    console.log("sorting rerender")
    return (
        <div style={{textAlign:"right"}}>
            <BsFillArrowDownCircleFill className={styles.down}  onClick={()=>GetDataByPageAndSort("desc")}/>
            <BsFillArrowUpCircleFill  className={styles.up} onClick={()=>GetDataByPageAndSort("asc")}/>
        </div>
    )
}
export default React.memo(Sorting);