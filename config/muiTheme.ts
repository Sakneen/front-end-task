import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application
      },
    },
  },
});

export default muiTheme;
