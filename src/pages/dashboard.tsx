import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { Breadcrumb, Icon, PageTitle, Table, Pagination } from "@/components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "@/styles/pages/Dashboard.module.css";

const Dashboard = ({ data }: any) => {
  const [currentUnits, setCurrentUnits] = useState<any>([]);
  const [filteredUnits, setFilteredUnits] = useState(data);
  const [sortDirectionByID, setSortDirectionByID] = useState(false);
  const [sortDirectionByType, setSortDirectionByType] = useState(false);
  const [sortDirectionByPrice, setSortDirectionByPrice] = useState(false);
  const sortRef = useRef<any>("");
  const filterRef = useRef<any>("");
  // lightbox toggler
  const [lightBoxVisible, setLightBoxVisible] = useState(false);
  const [unitPhotos, setUnitPhotos] = useState<any>([]);

  // Handle pagination
  const handleCurrentUnits = useCallback((paginatedUnits: []) => {
    setCurrentUnits(paginatedUnits);
  }, []);

  // Filter input by unit id
  const handleIdFilter = useCallback(() => {
    const filtered = data.filter((unit: any) =>
      unit.unit_id.toLowerCase().includes(filterRef.current.value.toLowerCase())
    );
    setFilteredUnits(filtered);
  }, [data]);

  // Handle dropdown and button sorting
  const handleSort = (e: any) => {
    const sortLabel = e.target.innerText;
    let sortedUnits: any[] = [...filteredUnits];

    sortLabel && (sortRef.current.innerText = sortLabel);

    if (sortRef.current.innerText === "Unit ID") {
      setSortDirectionByID(!sortDirectionByID);
      sortedUnits.sort((a: any, b: any) =>
        sortDirectionByID
          ? a.unit_id > b.unit_id
            ? 1
            : b.unit_id > a.unit_id
            ? -1
            : 0
          : b.unit_id > a.unit_id
          ? 1
          : a.unit_id > b.unit_id
          ? -1
          : 0
      );
    } else if (sortRef.current.innerText === "Unit Type") {
      setSortDirectionByType(!sortDirectionByType);
      sortedUnits.sort((a: any, b: any) =>
        sortDirectionByType
          ? a.unit_type > b.unit_type
            ? 1
            : b.unit_type > a.unit_type
            ? -1
            : 0
          : b.unit_type > a.unit_type
          ? 1
          : a.unit_type > b.unit_type
          ? -1
          : 0
      );
    } else if (sortRef.current.innerText === "Unit Price") {
      setSortDirectionByPrice(!sortDirectionByPrice);
      sortedUnits.sort((a: any, b: any) =>
        sortDirectionByPrice
          ? a.total_price > b.total_price
            ? 1
            : b.total_price > a.total_price
            ? -1
            : 0
          : b.total_price > a.total_price
          ? 1
          : a.total_price > b.total_price
          ? -1
          : 0
      );
    }
    setFilteredUnits(sortedUnits);
  };

  // handleLightBoxToggle
  const handleLightBoxToggle = useCallback(
    (photos: []) => {
      const lightBoxPhotos: any[] = [];
      setLightBoxVisible(!lightBoxVisible);
      photos.map((photo) => {
        lightBoxPhotos.push({ src: photo });
      });
      setUnitPhotos(lightBoxPhotos);
    },
    [lightBoxVisible]
  );

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
                onChange={handleIdFilter}
                ref={filterRef}
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
                onClick={handleSort}
                className={`d-flex align-items-center ${styles.dashboard__sort__btn}`}
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
                      onClick={(e) => handleSort(e)}
                    >
                      Unit ID
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${styles.dashboard__sort__dropdown__menu__item}`}
                      href=""
                      onClick={(e) => handleSort(e)}
                    >
                      Unit Type
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${styles.dashboard__sort__dropdown__menu__item}`}
                      href=""
                      onClick={(e) => handleSort(e)}
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
            <Table
              units={currentUnits}
              onLightBoxToggle={handleLightBoxToggle}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <Pagination
              items={filteredUnits}
              currentUnits={handleCurrentUnits}
            />
          </div>
        </div>
      </div>

      <Lightbox
        open={lightBoxVisible}
        close={() => setLightBoxVisible(false)}
        slides={unitPhotos}
      />
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3005/listings");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Dashboard;
