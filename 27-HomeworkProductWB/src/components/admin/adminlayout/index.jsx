import React from 'react'
import AdminHeader from '../../../layout/Aheader'
import AdminFooter from '../../../layout/Afooter'
import { Outlet } from 'react-router-dom'

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