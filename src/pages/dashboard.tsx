import Head from "next/head";
import { Breadcrumb, Icon, PageTitle, Pagination, Table } from "@/components";
import Link from "next/link";
import styles from "@/styles/pages/Dashboard.module.css";
import { useEffect, useRef, useState } from "react";

export default function dashboard({ data }: any) {
  const [filteredUnits, setFilteredUnits] = useState(data);
  const sortRef = useRef("");

  // Filter input by unit id
  const handleIdFilter = (e: any) => {
    const filtered = data.filter((unit: any) =>
      unit.unit_id.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUnits(filtered);
  };

  const handleSortById = (e: any) => {
    sortRef.current.innerText = e.target.innerText;
    const sortedUnits = filteredUnits.sort((a: any, b: any) =>
      a.unit_id > b.unit_id ? 1 : b.unit_id > a.unit_id ? -1 : 0
    );
    setFilteredUnits(sortedUnits);
  };

  const handleSortByType = (e: any) => {
    sortRef.current.innerText = e.target.innerText;
    const sortedUnits = filteredUnits.sort((a: any, b: any) =>
      a.unit_type > b.unit_type ? 1 : b.unit_type > a.unit_type ? -1 : 0
    );
    setFilteredUnits(sortedUnits);
  };

  const handleSortByPrice = (e: any) => {
    sortRef.current.innerText = e.target.innerText;
    const sortedUnits = filteredUnits.sort((a: any, b: any) =>
      a.total_price > b.total_price ? 1 : b.total_price > a.total_price ? -1 : 0
    );
    setFilteredUnits(sortedUnits);
  };

  const sortReverse = () => {
    if (sortRef.current.innerText === "Unit ID") {
      const sortedUnits = filteredUnits.sort((a: any, b: any) =>
        a.unit_id > b.unit_id ? -1 : b.unit_id > a.unit_id ? 1 : 0
      );
      setFilteredUnits(sortedUnits);
    } else if (sortRef.current.innerText === "Unit Type") {
      const sortedUnits = filteredUnits.sort((a: any, b: any) =>
        a.unit_type > b.unit_type ? -1 : b.unit_type > a.unit_type ? 1 : 0
      );
      setFilteredUnits(sortedUnits);
    } else if (sortRef.current.innerText === "Unit Price") {
      const sortedUnits = filteredUnits.sort((a: any, b: any) =>
        a.total_price > b.total_price
          ? -1
          : b.total_price > a.total_price
          ? 1
          : 0
      );
      setFilteredUnits(sortedUnits);
    }
  };

  return (
    <>
      <Head>
        <title>Sakneen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`container px-0 ${styles.dashboard}`}>
        <PageTitle>Dashboard</PageTitle>
        <Breadcrumb />
        <div className="row mb-4">
          <div className="col-sm-6">
            <div
              className={`d-flex align-items-center ${styles.dashboard__filter}`}
            >
              <h4>Filters by ID:</h4>
              <input
                type="text"
                placeholder="ex: 45785"
                onChange={(e) => handleIdFilter(e)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className={`d-flex align-items-center justify-content-end ${styles.dashboard__sort}`}
            >
              <Link
                href=""
                role="button"
                onClick={sortReverse}
                className="d-flex align-items-center"
              >
                <Icon icon="sort" size={"1.8rem"} />
              </Link>
              <h6>Sort by:</h6>
              <div className={`dropdown ${styles.dashboard__sort__dropdown}`}>
                <Link
                  className="dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ref={sortRef}
                >
                  Unit ID
                </Link>

                <ul
                  className={`dropdown-menu ${styles.dashboard__sort__dropdown__menu}`}
                >
                  <li>
                    <Link
                      className={`dropdown-item ${styles.dashboard__sort__dropdown__menu__item}`}
                      href=""
                      onClick={(e) => handleSortById(e)}
                    >
                      Unit ID
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${styles.dashboard__sort__dropdown__menu__item}`}
                      href=""
                      onClick={(e) => handleSortByType(e)}
                    >
                      Unit Type
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${styles.dashboard__sort__dropdown__menu__item}`}
                      href=""
                      onClick={(e) => handleSortByPrice(e)}
                    >
                      Unit Price
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <Table units={filteredUnits} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3005/listings");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
