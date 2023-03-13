import {Typography , TableCell  , InputBase} from '@mui/material'
import { styled } from '@mui/material/styles';


export const InputField = styled(InputBase)(({theme}) => ({
  padding : '5px',
  marginLeft : '10px',
  outline: "none",
  border: "none",
  backgroundColor: "white",
  width : 'auto',
  borderRadius : '10px',
  textAlign : 'center',
  [theme.breakpoints.down('sm')]: {
    padding : "0",
    width : '50%',
},
}));

export const TableCellStyle = styled(TableCell)(() => ({
  fontSize : '16px',
  fontWeight : 700,
  textAlign : 'center'
}))