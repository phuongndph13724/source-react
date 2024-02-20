import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex justify-center py-4 bg-gray-200">
      <ul className="flex w-[50%] justify-between">
        <li className="font-[600] hover:text-blue-400">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="font-[600] hover:text-blue-400">
          <Link to={'/news'}>New</Link>
        </li>
        <li className="font-[600] hover:text-blue-400">
          <Link to={'/products'}>Product</Link>
        </li>
        <li className="font-[600] hover:text-blue-400">
          <Link to={'/information'}>Information</Link>
        </li>
        <li className="font-[600] hover:text-blue-400">
          <Link to={'/admin'}>Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
