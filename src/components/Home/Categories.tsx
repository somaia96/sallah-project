import React from 'react'
import Head from './Head'
import { ICategories } from '../../interfaces'
const Categories = () => {
  const [categories, setCategories] = React.useState([])
  React.useEffect(() => {
   fetch("/src/data/category.json")
   .then(data=>data.json())
   .then(data=>setCategories(data))
  }, [])
  
  return (
    <div className='py-8 mb-3'>
      <Head title="تسوق حسب الفئات" description='تسوق احدث المنتجات المميزة المضافة جديد' />
      <div className='flex items-center'>
        {categories.map((category:ICategories) => (
          <div key={category.id} className='flex flex-col items-center flex-1'>
            <div className='flex justify-center items-center overflow-hidden p-5 h-[150px] w-[150px] rounded-[50%]'>
              <img className='h-[100%] rounded-[50%]' src={`../../src/assets/images/Home/${category.img}`} alt="" />
            </div>
            <h2 className='font-bold'>{category.name}</h2>
            <span className='text-gray-400'>{category.num}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
