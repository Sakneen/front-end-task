import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import styles from "@/styles/components/Pagination.module.css";

const Pagination = ({ items, currentUnits }: any) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  // console.log(currentItems);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setPageCount(Math.ceil(items.length / itemsPerPage));
    setCurrentItems(items.slice(itemOffset, endOffset));
    endOffset > items.length ? setItemOffset(0) : null;
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentUnits(currentItems)}
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={undefined}
        marginPagesDisplayed={1}
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
