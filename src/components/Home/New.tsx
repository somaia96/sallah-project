import React from 'react'
import Head from './Head'
import Products from '../products/Products'

const New = () => {
  return (
    <div className='bg-gray-50 pb-[--spacing-3xl]'>
      <div className="container">
        <Head title="وصل حديثا" description='تسوق احدث المنتجات المميزة المضافة جديد' />
        <Products endIndex={6} grid={1}/>
      
      </div>
    </div>
  )
}

export default New
