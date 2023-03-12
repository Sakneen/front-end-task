import Head from "next/head";
import { Breadcrumb, Icon, PageTitle, Pagination, Table } from "@/components";
import Link from "next/link";
import styles from "@/styles/pages/Dashboard.module.css";
import { useState } from "react";

export default function dashboard({ data }: any) {
  const [filteredUnits, setFilteredUnits] = useState(data);

  const handleIdFilter = (e: any) => {
    // setValue(e.target.value);
    const filtered = data.filter((unit: any) =>
      unit.unit_id.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUnits(filtered);
    console.log(filteredUnits);
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
              <Icon icon="sort" size={"1.8rem"} />
              <h6>Sort by:</h6>
              <div className={`dropdown ${styles.dashboard__sort__dropdown}`}>
                <Link
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Unit ID
                </Link>

                <ul
                  className={`dropdown-menu ${styles.dashboard__sort__dropdown__menu}`}
                >
                  <li>
                    <Link
                      className={`dropdown-item ${styles.dashboard__sort__dropdown__menu__item}`}
                      href="#"
                    >
                      Unit ID
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${styles.dashboard__sort__dropdown__menu__item}`}
                      href="#"
                    >
                      Unit Type
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${styles.dashboard__sort__dropdown__menu__item}`}
                      href="#"
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
