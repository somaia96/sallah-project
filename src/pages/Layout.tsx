import { Outlet } from "react-router-dom";
import React from 'react'
import Header from "../components/ProjectComponent/AllProductMenu/Header";

const Layout = () => {
  return (
    <div>
        <Header/>
      <div className="container">
           <Outlet/>
      </div>
    </div>
  )
}

export default Layout
