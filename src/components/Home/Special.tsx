import React from 'react'
import Head from './Head';
import Products from '../products/Products';

const Special = () => {
  return (
    <div className='py-5'>
      <Head title="منتجات مميزة" description='تسوق احدث المنتجات المميزة المضافة جديد'/>
      <Products endIndex={12} grid={1}/>
    </div>
  )
}

export default Special
