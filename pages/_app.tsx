import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import muiTheme from '../config/muiTheme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
