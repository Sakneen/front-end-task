import { Box, CssBaseline } from "@mui/material";
import { ReactElement } from "react";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";

interface Props {
  children: ReactElement;
}

export function Layout({ children }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </Box>
  );
}
