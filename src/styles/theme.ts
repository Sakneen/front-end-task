import { DM_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}
export const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#F5F5F5',
      dark: '#616161',
      light: '#E5E5E5',
    },
    secondary: {
      main: '#2419BE',
      dark: '#2419BE',
      light: '#2419BE',
    },
    neutral: {
      main: 'red',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: dmSans.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // color: 'red',
          backgroundColor: '#F5F5F5',
          // '& h1': {
          //   color: 'black',
          // },
        },
      },
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          [theme.breakpoints.down('md')]: {
            fontSize: 14,
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: 11,
          },
        },
      },
    },
  },
});

export default theme;
