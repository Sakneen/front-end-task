import React, { useEffect, useState } from 'react'
import styles from "./pagination.module.css"
function Pagination({ GetDataByPage, activatedPage }) {
    console.log("pagination rerender")

    const [pagesNumbers, setPagesNumbers] = useState([
        { id: 1, isActive: false },
        { id: 2, isActive: false },
        { id: 3, isActive: false },
        { id: 4, isActive: false },
        { id: 5, isActive: false },
        { id: 6, isActive: false },
        { id: 7, isActive: false },
        { id: 8, isActive: false },
        { id: 9, isActive: false }
    ])

    useEffect(() => {
        activeClickedButton(activatedPage)
    }, [activatedPage])

    const activeClickedButton = (pageNumber) => {
        setPagesNumbers(pagesNumbers.map(ele => {
            if (ele.id == pageNumber) {
                return { ...ele, isActive: true }
            }
            return { ...ele, isActive: false }
        }))
    }

    return (
        <div className=' d-flex justify-content-center mt-3  m-auto'>
            {
                pagesNumbers.map(({ id, isActive }) => {
                    return <div className={`${isActive ? styles.myOrange : styles.myWhite} ${styles.pagButton}`} onClick={() => GetDataByPage(id)} >{id}</div>
                })
            }
        </div>
    )
}

export default React.memo(Pagination);