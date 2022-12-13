//Next
import { useRouter } from "next/router";
import Head from "next/head";

//React
import { useState } from "react";

//Components
import Filter from "../../components/dashboard/Filter";
import Sort from "../../components/dashboard/Sort";
import UnitsTable from "../../components/dashboard/UnitsTable";
import TablePagination from "../../components/dashboard/TablePagination";
import Gallery from "../../components/dashboard/gallery/Gallery";

//utils helper
import { getUnits } from "../../utils/API";
import { getPath } from "../../utils/functions";

//Constants
import { sortOptions } from "../../constants";

const Dashboard = ({ units }) => {
 const router = useRouter();

 const [currentPage, setCurrentPage] = useState(Number(router.query.page) || 1);

 const [currentSort, setCurrentSort] = useState(
  router.query.sort || sortOptions[0].value
 );

 const [currentOrder, setCurrentOrder] = useState(router.query.order || "asc");

 const [id, setId] = useState(router.query.id || "");

 const [open, setOpen] = useState(false);

 const [gallery, setGallery] = useState(["/default.png"]);

 const changePageHandler = (e, page) => {
  setCurrentPage(page);
  router.push(
   {
    pathname: router.pathname,
    query: { ...router.query, page },
   },
   null,
   { scroll: false }
  );
 };

 const changeSortHandler = (e) => {
  setCurrentSort(e.target.value);
  router.push(
   {
    pathname: router.pathname,
    query: { ...router.query, sort: e.target.value },
   },
   null,
   { scroll: false }
  );
 };

 const changeOrderHandler = (val) => {
  let order = val;

  if (currentOrder === "asc") {
   order = "desc";
   setCurrentOrder("desc");
  } else {
   setCurrentOrder("asc");
  }

  router.push(
   {
    pathname: router.pathname,
    query: { ...router.query, order },
   },
   null,
   { scroll: false }
  );
 };

 const openGalleryHandler = (id) => {
  const unit = units.find((unit) => unit._id === id);
  setGallery(unit.photos);
  setOpen(true);
 };

 const filterByIdHandler = (e) => {
  console.log(e.target.value);
  setId(e.target.value);
  router.push(
   {
    pathname: router.pathname,
    query: { ...router.query, id: e.target.value },
   },
   null,
   { scroll: false }
  );
 };

 const title = getPath(router.asPath);

 return (
  <>
   <Head>
    <title>Sakneen | {title}</title>
    <meta
     name="description"
     content="table displaying a bunch of units (apartments, villas...)."
    />
   </Head>
   <div className="w-full flex justify-between items-center">
    <Filter id={id} filterByIdHandler={filterByIdHandler} />
    <Sort
     currentSort={currentSort}
     currentOrder={currentOrder}
     sortHandler={changeSortHandler}
     orderHandler={changeOrderHandler}
    />
   </div>
   <UnitsTable units={units} openGallery={openGalleryHandler} />
   <TablePagination page={currentPage} changePage={changePageHandler} />
   <Gallery open={open} setOpen={setOpen} gallery={gallery} />
  </>
 );
};

export async function getServerSideProps(context) {
 const { page, sort, order, id } = context.query;
 const units = await getUnits(page, sort, order, id);
 return {
  props: { units },
 };
}
export default Dashboard;
