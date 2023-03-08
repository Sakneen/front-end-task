import { Box, CssBaseline } from "@mui/material";
import { NavBar, Footer } from "@/components";
import { ReactElement } from "react";

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
