import { useState, useEffect } from "react";
import styles from "./Pagination.module.scss";

type IProps = {
  dataLength: number;
  objsPerPage: number;
  handlePage: Function;
};

const Pagination = (props: IProps) => {
  const { dataLength, objsPerPage, handlePage } = props;


  const [currentPage, setcurrentPage] = useState(1);
  const [maxPageNumber, setmaxPageNumber] = useState(5);
  const [minPageNumber, setminPageNumber] = useState(0);
  const [pages, setPages] = useState<number[]>([]);

  const pageNumber = 5;

  const handleClick = (num: number) => {
    setcurrentPage(num);
  };

  useEffect(() => {
    setPages(
      Array.from({ length: Math.ceil(dataLength / objsPerPage) }, (_, i) => ++i)
    );
  }, [dataLength , objsPerPage]);

  useEffect(() => {
    handlePage(currentPage);
  }, [currentPage]);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumber + 1 && number > minPageNumber) {
      return (
        <li
          key={number}
          onClick={() => handleClick(number)}
          className={currentPage == number ? styles.active : ""}
        >
          {number}
        </li>
      );
    }
  });

  const handleNextbtn = () => {
    if (currentPage !== pages[pages.length - 1]) {
      setcurrentPage(currentPage + 1);

      if (currentPage + 1 > maxPageNumber) {
        setmaxPageNumber(maxPageNumber + pageNumber);
        setminPageNumber(minPageNumber + pageNumber);
      }
    }
  };

  const handlePrevbtn = () => {
    if (currentPage !== pages[0]) {
      setcurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumber == 0) {
        setmaxPageNumber(maxPageNumber - pageNumber);
        setminPageNumber(minPageNumber - pageNumber);
      }
    }
  };

  return (
    <div className={styles.pagination}>
      <ul>
        <li
          onClick={handlePrevbtn}
          className={currentPage == pages[0] ? styles.disabled : ""}
        >
          {`<`}
        </li>
        {renderPageNumbers}
        <li
          onClick={handleNextbtn}
          className={
            currentPage == pages[pages.length - 1] ? styles.disabled : ""
          }
        >
          {`>`}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
