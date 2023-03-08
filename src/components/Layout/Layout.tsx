import { CssBaseline } from "@mui/material";
import { NavBar, Footer } from "@/components";
import { ReactElement } from "react";
import Head from "next/head";

interface Props {
  children: ReactElement;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.sakneen.com/assets/website-manifest/favicon-32x32.png"
        />
      </Head>
      <CssBaseline />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
