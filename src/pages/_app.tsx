import HomeLayout from "../components/layout/HomeLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {


  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  );

};


export default App;
