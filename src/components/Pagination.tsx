import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import styles from "@/styles/components/Pagination.module.css";

const Pagination = ({ items, setCurrentUnits }: any) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  // console.log(currentItems);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {setCurrentUnits(currentItems)}
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={undefined}
        className={styles.pagination}
        pageClassName={styles.pagination__item}
        pageLinkClassName={styles.pagination__item__link}
        activeClassName={styles.pagination__item__active}
        breakClassName={styles.pagination__item__link}
        previousClassName={styles.pagination__arrow}
        nextClassName={styles.pagination__arrow}
        previousLinkClassName={styles.pagination__arrow__previous}
        nextLinkClassName={styles.pagination__arrow__next}
        disabledLinkClassName={styles.pagination__arrow__disabled}
      />
    </>
  );
};

export default Pagination;

// return (
// <nav aria-label="Page navigation" className={styles.pagination}>
//   <ul className="pagination justify-content-center">
//     <li className={`page-item disabled ${styles.pagination__item}`}>
//       <Link
//         className={`page-link ${styles.pagination__item__link}`}
//         href="#"
//         aria-label="Previous"
//       >
//         <i className={`${styles.arrow} ${styles.left}`}></i>
//       </Link>
//     </li>
//     <li
//       className={`page-item active ${styles.pagination__item} ${styles.pagination__item__active}`}
//     >
//       <Link
//         className={`page-link ${styles.pagination__item__link}`}
//         href="#"
//       >
//         <span>1</span>
//       </Link>
//     </li>
//     <li className={`page-item ${styles.pagination__item}`}>
//       <Link
//         className={`page-link ${styles.pagination__item__link}`}
//         href="#"
//       >
//         <span>2</span>
//       </Link>
//     </li>
//     <li className={`page-item ${styles.pagination__item}`}>
//       <Link
//         className={`page-link ${styles.pagination__item__link}`}
//         href="#"
//       >
//         <span>3</span>
//       </Link>
//     </li>
//     <li className={`page-item ${styles.pagination__item}`}>
//       <Link
//         className={`page-link ${styles.pagination__item__link}`}
//         href="#"
//       >
//         <span>4</span>
//       </Link>
//     </li>
//     <li className={`page-item ${styles.pagination__item}`}>
//       <Link
//         className={`page-link ${styles.pagination__item__link}`}
//         href="#"
//       >
//         <span>5</span>
//       </Link>
//     </li>
//     <li className={`page-item disabled ${styles.pagination__item}`}>
//       <Link
//         className={`page-link ${styles.pagination__item__link}`}
//         href="#"
//       >
//         <span>...</span>
//       </Link>
//     </li>
//     <li className={`page-item ${styles.pagination__item}`}>
//       <Link
//         className={`page-link ${styles.pagination__item__link}`}
//         href="#"
//       >
//         <span>35</span>
//       </Link>
//     </li>
//     <li className={`page-item ${styles.pagination__item}`}>
//       <Link
//         className={`page-link ${styles.pagination__item__link}`}
//         href="#"
//         tabIndex={-1}
//         aria-disabled="true"
//         aria-label="Next"
//       >
//         <i className={`${styles.arrow} ${styles.right}`}></i>
//       </Link>
//     </li>
//   </ul>
// </nav>
// );
