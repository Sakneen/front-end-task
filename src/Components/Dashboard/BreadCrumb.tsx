import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {BreadCrumbContainer , BreadTitle } from "@/styles/dashboard/breadcrumbStyle";

const BreadCrumb = () => {
  return (
    <BreadCrumbContainer>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <BreadTitle>
          <HomeIcon
            sx={{mr: 0.5, fontSize: "22px", }}
            fontSize="inherit"
          />
          <span style={{ textDecoration: "underline 1.2px"}}>Home</span>
        </BreadTitle>
        <BreadTitle style={{color : '#9E9E9E'}}>
          Dashboard
        </BreadTitle>
      </Breadcrumbs>
    </BreadCrumbContainer>
  );
};
export default BreadCrumb;
