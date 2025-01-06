import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientFooter from '../layout/footer'
import ClientHeader from '../layout/header'

const ClientLayout = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    <ClientFooter/>
    </>
  )
}

export default ClientLayout