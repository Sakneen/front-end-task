import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import RoofingIcon from "@mui/icons-material/Roofing";
import Link from "next/link";

export function NavBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" aria-label="Company logo - To home page">
            <RoofingIcon
              sx={{
                color: "white",
                width: "40px",
                height: "40px",
              }}
            />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
