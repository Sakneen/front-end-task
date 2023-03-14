import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js";
import "../../node_modules/@mui/styled-engine/GlobalStyles/index.js";
import "../../node_modules/@mui/material/styles/index.js";
import "../../node_modules/@mui/material/index.js";
import SSRProvider from "react-bootstrap/SSRProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import CounterContextProvider from "@/components/context/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CounterContextProvider>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </CounterContextProvider>
  );
}
