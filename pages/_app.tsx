import React from "react";
import { ImagesModalContextProvider } from "../context/ImagesModalContext";
import { PaginationContextProvider } from "../context/PaginationContext";
import { SearchContextProvider } from "../context/SearchContext";
import { SortContextProvider } from "../context/SortContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PaginationContextProvider>
      <SearchContextProvider>
        <SortContextProvider>
          <ImagesModalContextProvider>
            <Component {...pageProps} />
          </ImagesModalContextProvider>
        </SortContextProvider>
      </SearchContextProvider>
    </PaginationContextProvider>
  );
}

export default MyApp;
