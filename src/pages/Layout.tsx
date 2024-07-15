import { Outlet } from "react-router-dom";
import React from 'react'
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Layout = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
