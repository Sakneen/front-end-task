import { PaginationContextProvider } from "../context/PaginationContext";
import { SearchContextProvider } from "../context/SearchContext";
import { SortContextProvider } from "../context/SortContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PaginationContextProvider>
      <SearchContextProvider>
        <SortContextProvider>
          <Component {...pageProps} />
        </SortContextProvider>
      </SearchContextProvider>
    </PaginationContextProvider>
  );
}

export default MyApp;
