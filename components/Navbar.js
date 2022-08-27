import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Appbar from '@mui/material/AppBar'
import Image from 'next/image';
const Navbar = () => {
  return (
    <Appbar position='static' style={{backgroundColor:'#2419BE'}}>
        <Toolbar>
            <Image src={require('../assets/logo.png')} />
        </Toolbar>
    </Appbar>
  )
}

export default Navbar