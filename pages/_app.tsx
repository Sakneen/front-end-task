import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import Layout from '../components/Layout';
import muiTheme from '../config/muiTheme';
import { wrapper } from '../lib/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default wrapper.withRedux(MyApp);
