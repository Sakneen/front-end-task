import * as React from 'react';
import { Container , AppBar ,  Box , Toolbar} from '@mui/material';
import { AppContainer } from '@/styles/appbar';
import Logo from '../../assets/Vector.png'
import Image from 'next/image';


export default function NavBar() {
  return (
    <AppContainer>
      <AppBar position="fixed" style={{ backgroundColor: "#2419BE" }}>
        <Container>
          <Toolbar variant="dense" style={{ padding: "15px" }}>
            <Image src={Logo} alt="logo" />
          </Toolbar>
        </Container>
      </AppBar>
    </AppContainer>
  );
}