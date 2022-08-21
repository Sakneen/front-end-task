// import Image from 'next/image'
import React from 'react'
import styles from './ListingsList.module.css'

const ListingsList = (props) => {

    const { data, onImagePress } = props

    return (
        <>
            <table className={styles.table} >

                <thead >
                    <tr>
                        <th className={styles.th} >Unit ID</th>
                        <th className={styles.th} >Unit Type</th>
                        <th className={styles.th} >Price</th>
                        <th className={styles.th} >Build Up Area</th>
                        <th className={styles.th} >For Sale</th>
                        <th className={styles.th} >Galary</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(({ _id, for_sale, unit_id, total_price, unit_type, bua, photos }, index) => (
                        <tr key={_id} className={styles.tr} >
                            <td className={styles.td} >{unit_id}</td>
                            <td className={styles.td} >{unit_type}</td>
                            <td className={styles.td} >{total_price}</td>
                            <td className={styles.td} >{`${bua} m2`}</td>
                            <td className={styles.td} >
                                <p className={` ${styles.forSaleText} ${for_sale ? styles.forSale : styles.notForSale}`} >
                                    {for_sale ? 'FOR SALE' : 'NOT FOR SALE'}
                                </p>
                            </td>

                            <td className={styles.td} >
                                <img
                                    onClick={() => { onImagePress && onImagePress(index) }}
                                    src={photos[0]}
                                    width={100}
                                    height={100}
                                />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}


export default React.memo((props) => <ListingsList {...props} />)  