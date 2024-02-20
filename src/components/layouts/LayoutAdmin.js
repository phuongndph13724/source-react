import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footers/Footer'
import HeaderAdmin from '../headers/HeaderAdmin'

const LayoutAdmin = () => {
  return (
    <div className='h-screen flex flex-col'>
      <HeaderAdmin/>
      <div className='h-full'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default LayoutAdmin