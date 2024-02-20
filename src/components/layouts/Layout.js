import React from 'react'
import Header from '../headers/Header'
import Footer from '../footers/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Header/>
      <div className='h-full'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout