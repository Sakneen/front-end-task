import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: { primary: { main: '#2419BE' } },
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
    MuiPaginationItem: {
      styleOverrides: {
        ellipsis: { minWidth: '30px', minHeight: '30px' },
        firstLast: { backgroundColor: 'transparent' },
      },
    },
  },
});

export default muiTheme;
