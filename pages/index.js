import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Container from "@mui/material/Container";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
export default function Home() {
  const [grid, setGrid] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/listings")
      .then((res) => {
        console.log(res);
        setGrid(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const columns = [
    { field: "unit_id", headerName: "Unit ID" },
    { field: "unit_type", headerName: "Unit Type" },
    { field: "total_price", headerName: "total_price" },
    { field: "bua", headerName: "Build Up area" },

    {
      field: "for_sale",
      headerName: "For Sale",
      renderCell: (params) => {
        // console.log("PARAMS", params);
        return (
          <>
            <div>
              {params.value == true ? (
                <div
                  style={{
                    backgroundColor: "#2419BE",
                    height: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#FFFFFF" }}>for sale</h6>
                </div>
              ) : (
                <div
                  style={{
                    backgroundColor: "#616161",
                    height: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#FFFFFF" }}>not for sale</h6>
                </div>
              )}
            </div>
          </>
        );
      },
    },
    {
      field: "photos",
      headerName: "Gallery",
      renderCell: (params) => {
        console.log("PARAMS", params);
        return (
          <>
            <img style={{ width: 50, height: 50 }} src={params.value} />
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Navbar />
      <Container
        maxWidth="lg"
        style={{  
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: 50 }}>
          <Header />
        </div>

        <DataGrid
          style={{ width: "55%", height: 400 }}
          columns={columns}
          rows={grid}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[5]}
          autoPageSize={true}
        />
      </Container>
    </div>
  );
}
