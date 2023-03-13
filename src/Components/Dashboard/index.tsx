import React from 'react'
import { Container , Typography } from '@mui/material'
import BreadCrumb from './BreadCrumb'
import DataTable from './DataTable'
import { DashboardTitle } from '@/styles/dashboard'

const DashBoard = () => {
  return (
    <Container maxWidth="md"  style={{ padding : '30px' }}>
        <DashboardTitle>
            Dashboard
        </DashboardTitle>
        <BreadCrumb />
        <DataTable />
    </Container>
  )
}

export default DashBoard