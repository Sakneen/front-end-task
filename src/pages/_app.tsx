import React from "react";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
