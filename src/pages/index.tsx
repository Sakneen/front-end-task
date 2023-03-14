import Navbar from "./../components/Navbar";
import Home from "@/components/Home";
import Images from "@/components/Images";
import { Box, Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { ButtonGroup } from "react-bootstrap";

const index = () => {
  const [result, setResult] = useState<any[]>([]);
  const [showResult, setShowResult] = useState<any[]>([]);
  const [showData, setshowData] = useState<any[]>([]);
  const [search, setSearch] = useState<any[]>([]);
  const [sortById, setSortById] = useState<any[]>([]);
  const [sortByType, setSortByType] = useState<any[]>([]);
  const [sortByPrice, setSortByPrice] = useState<any[]>([]);
  const [counter, setCounter] = useState<number>(10);

  const pageSize = 5;

  const [pagination, setpagination] = useState({
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    if (search.length) {
      shwoData(pagination.from, pagination.to, search);
    } else if (sortById.length) {
      shwoData(pagination.from, pagination.to, sortById);
    } else if (sortByType.length) {
      shwoData(pagination.from, pagination.to, sortByType);
    } else if (sortByPrice.length) {
      shwoData(pagination.from, pagination.to, sortByPrice);
    } else if (
      search.length === 0 &&
      sortByType.length === 0 &&
      sortById.length === 0 &&
      sortByPrice.length === 0
    ) {
      shwoData(pagination.from, pagination.to, showData);
    }
  }, [
    showData,
    sortById,
    sortByType,
    sortByPrice,
    search,
    pagination.from,
    pagination.to,
  ]);

  useEffect(() => {
    getData();
    if (showData) {
      shwoData(pagination.from, pagination.to, showData);
    }
  }, []);

  async function getData() {
    const req = await fetch("http://localhost:3005/listings");
    const results = await req.json();
    setshowData(results);
    setResult(results);
  }

  function shwoData(from: number, to: number, typeOfData: object[]) {
    const products = typeOfData.slice(from, to);
    setShowResult(products);
  }

  const handlePageChange = (e: any, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setpagination({ ...pagination, from: from, to: to });
  };

  function searchByById(e: any) {
    if (e.target.value) {
      let term = e.target.value;

      let searchResult: object[] = [];

      for (let i = 0; i < result.length; i++) {
        if (
          result[i].unit_id.toUpperCase().includes(term.toUpperCase()) ===
            true &&
          term
        ) {
          searchResult.push(result[i]);
        }
      }
      setSearch(searchResult);
      setCounter(Math.ceil(searchResult.length / pageSize));
    } else {
      setSearch(result);
      shwoData(pagination.from, pagination.to, showData);
      setCounter(Math.ceil(result.length / pageSize));
    }
  }

  function sortId() {
    let sortResult: object[] = [];
    for (let i = 0; i < result.length; i++) {
      sortResult.push(result[i].unit_id);
    }
    sortResult.sort();
    let newResult: object[] = [];
    for (let i = 0; i < sortResult.length; i++) {
      result.map((elm) =>
        elm.unit_id == sortResult[i] ? newResult.push(elm) : null
      );
    }
    if (sortById.length) {
      shwoData(pagination.from, pagination.to, sortById);
    } else {
      setSortById(newResult);
    }
  }

  function sortType() {
    let sortByTypes = result.sort((a, b) => {
      let fa = a.unit_type.toLowerCase(),
        fb = b.unit_type.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    if (sortByType.length) {
      shwoData(pagination.from, pagination.to, sortByType);
    } else {
      setSortByType(sortByTypes);
    }
  }

  function sortPrice() {
    let sortByPrice = result.sort((a, b) => {
      return a.total_price - b.total_price;
    });
    if (sortByPrice.length) {
      shwoData(pagination.from, pagination.to, sortByPrice);
    } else {
      setSortByPrice(sortByPrice);
    }
  }

  function reverseSort() {
    if (sortById.length) {
      if (showResult[0].unit_id === sortById[0].unit_id) {
        let reverseData = [...sortById].reverse();
        shwoData(0, 50, reverseData);
      }
    }
    if (sortByType.length) {
      if (showResult[0].unit_type === sortByType[0].unit_type) {
        let reverseData = [...sortByType].reverse();
        shwoData(0, 50, reverseData);
      }
    }
    if (sortByPrice.length) {
      if (showResult[0].total_price === sortByPrice[0].total_price) {
        let reverseData = [...sortByPrice].reverse();
        shwoData(0, 50, reverseData);
      }
    }
  }

  return (
    <div className="app">
      <Navbar />
      <main className=" container mt-5 pt-3">
        <h3 className=" fw-bold">Dashboard</h3>
        <div className=" text-secondary d-flex bg-white pt-1 rounded-1">
          <i className="fa-solid fa-house mx-2  "></i>
          <h6 className=" mx-2 mb-0 ">Home</h6>
          <div className=" mx-2 mb-0">
            <span>{">"}</span>
          </div>
          <h6 className=" mx-2 mb-0">
            <button
              className=" border-0 bg-transparent text-secondary"
              onClick={() => {
                shwoData(pagination.from, pagination.to, showData);
              }}
            >
              Dashboard
            </button>
          </h6>
        </div>

        <div className=" d-flex justify-content-between py-2 mt-3">
          <div className=" d-flex ">
            <h5 className=" fw-bold pt-1 m-0">Filters by ID:</h5>
            <input
              type="text"
              className="px-2 ms-4 border-0 rounded-1"
              placeholder="ex: 45785"
              onInput={() => {
                searchByById(event);
              }}
            />
          </div>

          <div className=" d-flex align-items-center  ">
            <div
              className=" dach pointer position-relative pe-5"
              onClick={() => {
                reverseSort();
              }}
            >
              <div className=" dach-1 position-absolute border-top border-1 border-primary-subtle "></div>
              <div className=" dach-2 position-absolute border-top border-1 border-primary-subtle "></div>
              <div className=" dach-3 position-absolute border-top border-1 border-primary-subtle "></div>
            </div>
            <h6 className=" fw-bold m-0 me-2">Sort by:</h6>
            <h5 className=" fw-bold m-0 ">items</h5>

            <div className="">
              {["down"].map((direction) => (
                <DropdownButton
                  as={ButtonGroup}
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  variant="bg-transparent border-0"
                  title={" "}
                >
                  <Dropdown.Item eventKey="1" onClick={sortId}>
                    <p className=" ps-2 m-0">Unit ID</p>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2" onClick={sortType}>
                    <p className=" ps-2 m-0">Unit type</p>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    <p className=" ps-2 m-0" onClick={sortPrice}>
                      Unit Price
                    </p>
                  </Dropdown.Item>
                </DropdownButton>
              ))}
            </div>
          </div>
        </div>

        <div className=" shadow">
          <div className=" row Table_titles">
            <div className=" col-2">
              <h6 className=" font_1 ps-1 pt-3">Unit ID</h6>
            </div>
            <div className=" col-2">
              <h6 className=" font_1 ps-1 pt-3">Unit type</h6>
            </div>
            <div className=" col-2">
              <h6 className=" font_1 ps-1 pt-3">Price</h6>
            </div>
            <div className=" col-2">
              <h6 className=" font_1 Build_up_area m-0 pt-3">Build up area</h6>
            </div>
            <div className=" col-2">
              <h6 className=" font_1 ps-1 pt-3">For sale</h6>
            </div>
            <div className=" col-2">
              <h6 className=" font_1 ps-1 pt-3">Gallery</h6>
            </div>
          </div>

          {showResult.map((elm: any) => (
            <Home key={elm._id} product={elm} />
          ))}
        </div>

        <Box
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          sx={{
            margin: "20px 0px",
          }}
        >
          <Pagination count={counter} onChange={handlePageChange} />
        </Box>

        <div>
          <Images />
        </div>
      </main>
    </div>
  );
};

export default index;
