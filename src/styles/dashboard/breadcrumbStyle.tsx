import {List , Typography , Box } from '@mui/material'
import { styled } from '@mui/material/styles';


export const BreadCrumbContainer = styled(Box)(() => ({
    backgroundColor : 'white',
    padding : '10px',
    borderRadius : '10px',
    width : '100%'
}))


export const BreadTitle = styled(Typography)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "500",
  color: "#616161",
  fontSize: "16px",
}));