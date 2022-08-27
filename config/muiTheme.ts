import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  typography: {
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { border: 0 }, // Remove outline of inputs
      },
    },
    MuiSelect: {
      styleOverrides: {},
    },
  },
});

export default muiTheme;
