import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminFooter from '../layout/Afooter'
import AdminHeader from '../layout/Aheader'

const AdminLayout = () => {
  return (
    <>
    <AdminHeader/>
    <Outlet/>
    <AdminFooter/>
    </>
  )
}

export default AdminLayout