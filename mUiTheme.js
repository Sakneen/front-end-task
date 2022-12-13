import { createTheme } from "@mui/material/styles";

const mUiTheme = createTheme({
 palette: { primary: { main: "#2419BE" } },
 components: {
  MuiOutlinedInput: {
   styleOverrides: {
    notchedOutline: { border: 0 },
   },
  },
 },
});

export default mUiTheme;
