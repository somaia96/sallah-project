import React from 'react'
import Header from '../components/ProjectComponent/AllProductMenu/Header'
import BreadCrumb from '../components/ProjectComponent/AllProductMenu/BreadCrumb'
import ContentContainer from '../components/ProjectComponent/AllProductMenu/ContentContainer'

const AllProductMenu = () => {
  return (
    <div className='AllProductMenu flex flex-col'>
      {/* <Header/> */}
      <BreadCrumb/>
      <ContentContainer/>
    </div>
  )
}

export default AllProductMenu
