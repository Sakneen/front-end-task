import React , {useEffect} from 'react'
import NavBar from '@/Components/AppBar'
import DashBoard from '@/Components/Dashboard'
import { Container } from '@mui/material'
import { NextPage } from 'next'
import { fetchData } from '@/Store/filterReducer'
import {useDispatch} from 'react-redux'

const Home  = () => {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchData())
  } ,[dispatch])
  
  return (
    <div>
      <NavBar />
      <DashBoard/>
    </div>
  );
}

export default Home

