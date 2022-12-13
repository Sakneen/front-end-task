//MUI
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import mUiTheme from "../mUiTheme";

//Layout
import Layout from "../components/layout";

//CSS
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
 return (
  <StyledEngineProvider injectFirst>
   <ThemeProvider theme={mUiTheme}>
    <Layout>
     <Component {...pageProps} />
    </Layout>
   </ThemeProvider>
  </StyledEngineProvider>
 );
}

export default MyApp;
