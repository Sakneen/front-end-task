import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import FsLightbox from 'fslightbox-react';


    

import styles from '../../styles/ListingTable.module.css';

const ListingTable = (props) => {
  //image light box
  const [toggler, setToggler] = React.useState(false);

   //adding the pagination to the table
     const [page, setPage] = React.useState(1);


     const [data, getData] = useState([])
     const URL = "http://localhost:3005/listings?_page= " + page + "&_limit=10";


     const handleChange = (event, value) => {
      setPage(value);
      fetchData();
  };
   
  
   //fetching the data when page is changed
    useEffect(() => {
        fetchData()
    }, [page])

    //fetching data from the json file
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                getData(response);
            })
 
    }


   return (
      <>
      <table className={styles.listingTable}>
         <thead>
            <tr className={styles.tableRow} style={{backgroundColor: 'white'}}>
               <th className={styles.th}>Unit ID</th>
               <th className={styles.th}>Unit Type</th>
               <th className={styles.th}>Price</th>
               <th className={styles.th}>Build up area</th>
               <th className={styles.th}>For Sale</th>
               <th className={styles.th}>Gallery</th>
            </tr>
         </thead>

         <tbody>


           {data.map((item, i) => (
            <tr className={styles.tableRow} key={i}>
                <td className={styles.td}>{item.unit_id}</td>
                <td className={styles.td}>{item.unit_type}</td>
                <td className={styles.td}>{item.total_price}</td>
                <td className={styles.td}>{item.bua} m<span>&#178;</span></td>
                <td className={styles.td}>
                  {item.for_sale === true ? <button className={styles.saleButton}>FOR SALE</button> : <button className={styles.noSaleButton}>NOT FOR SALE</button>}
                </td>
                <td className={styles.td}>
                  <img className={styles.listingImg} src={item.photos[1]} onClick={ () => setToggler(!toggler) } />
                  <FsLightbox
                    toggler={ toggler }
                    sources={ [
                      "https://img.sakneen.com/1616632176084-fHqYA.jpg",
                "https://img.sakneen.com/1616632176143-kvFES.jpg",
                "https://img.sakneen.com/1616632176155-LAtgn.jpg",
                "https://img.sakneen.com/1616632176168-uIdaw.jpg",
                "https://img.sakneen.com/1616632176171-lVxWE.jpg"
                    ] }
                  />
                  </td>
               </tr>
           ))}
               
            
         </tbody>
      </table>
      
      <Pagination
        count={5}
        page={page}
        variant='outlined'
        color='primary'
        onChange={handleChange}
      />

      </>
   );
};

export default ListingTable;
