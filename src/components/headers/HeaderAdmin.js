import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
    <div>
        
        <div className="w-full flex justify-center py-4 bg-gray-200">
      <ul className="flex w-[50%] justify-between">
        <li className="font-[600] hover:text-blue-400">
          <Link to={'/admin'}>Dashboard</Link>
        </li>
        <li className="font-[600] hover:text-blue-400">
          <Link to={'/admin/news'}>News Management</Link>
        </li>
        <li className="font-[600] hover:text-blue-400">
          <Link to={'/admin/product-managements'}>Product Management</Link>
        </li>
        <li className="font-[600] hover:text-blue-400">
          <Link to={'/admin/user-managements'}>User Management</Link>
        </li>
        <li className="font-[600] hover:text-blue-400">
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default HeaderAdmin