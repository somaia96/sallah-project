import Head from '../components/Home/Head'
import BreadCrumb from '../components/Home/BreadCrumb'

import Products from '../components/products/Products'
const Details = () => {
  return (
    <div className='bg-gray-50 pb-[--spacing-3xl]'>
      <div className="container">
        <BreadCrumb/>
        <Head title="منتجات مشابهة" description='تسوق احدث المنتجات المميزة المضافة جديد' />
        <Products endIndex={6} grid={1}/>   
      </div>
    </div>
  )
}

export default Details
