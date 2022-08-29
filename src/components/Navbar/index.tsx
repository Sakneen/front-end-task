import React from 'react'
import images from 'values/images';
import Navbar from './Navbar';

const NavbarMain = () => {
  return (
    <Navbar.Container>
      <Navbar.Logo src={images.nav.logo} width={32} height={29} />
    </Navbar.Container>
  );
}

export default NavbarMain;