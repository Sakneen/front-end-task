import "../styles/globals.css";
import { wrapper } from "redux/store";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
