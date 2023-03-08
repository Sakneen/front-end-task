import { CssBaseline } from "@mui/material";
import { NavBar } from "@/components";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export function Layout({ children }: Props) {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>{children}</main>
    </>
  );
}
