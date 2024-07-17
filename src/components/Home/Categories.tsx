import React from 'react'
import Head from './Head'

const Categories = () => {
  return (
    <div className='py-8'>
      <Head title="تسوق حسب الفئات" description='تسوق احدث المنتجات المميزة المضافة جديد' />
      <div className='flex items-center'>
        <div className='flex flex-col items-center flex-1'>
          <div className='flex justify-center items-center overflow-hidden p-5 h-[150px] w-[150px] rounded-[50%]'>
            <img className='h-[100%] rounded-[50%]' src="../../src/assets/images/Home/30.jfif" alt="" />
          </div>
          <h2 className='font-bold'>سماعات اذن</h2>
          <span className='text-gray-400'>150 منتج</span>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <div className='flex justify-center items-center overflow-hidden p-5 h-[150px] w-[150px] rounded-[50%]'>
            <img className='h-[100%] rounded-[50%]' src="../../src/assets/images/Home/14.jfif" alt="" />
          </div>
          <h2 className='font-bold'>اجهزة لابتوب</h2>
          <span className='text-gray-400'>150 منتج</span>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <div className='flex justify-center items-center overflow-hidden p-5 h-[150px] w-[150px] rounded-[50%]'>
            <img className='h-[100%] rounded-[50%]' src="../../src/assets/images/Home/2.jfif" alt="" />
          </div>
          <h2 className='font-bold'>سماعات</h2>
          <span className='text-gray-400'>150 منتج</span>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <div className='flex justify-center items-center overflow-hidden p-5 h-[150px] w-[150px] rounded-[50%]'>
            <img className='h-[100%] rounded-[50%]' src="../../src/assets/images/Home/13.jfif" alt="" />
          </div>
          <h2 className='font-bold'>ساعات رقمية</h2>
          <span className='text-gray-400'>150 منتج</span>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <div className='flex justify-center items-center overflow-hidden p-5 h-[150px] w-[150px] rounded-[50%]'>
            <img className='h-[100%] rounded-[50%]' src="../../src/assets/images/Home/31.jfif" alt="" />
          </div>
          <h2 className='font-bold'>موبايلات</h2>
          <span className='text-gray-400'>150 منتج</span>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <div className='flex justify-center items-center overflow-hidden p-5 h-[150px] w-[150px] rounded-[50%]'>
            <img className='h-[100%] rounded-[50%]' src="../../src/assets/images/Home/21.jfif" alt="" />
          </div>
          <h2 className='font-bold'>شاشات كمبيوتر</h2>
          <span className='text-gray-400'>150 منتج</span>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <div className='flex justify-center items-center overflow-hidden p-5 h-[150px] w-[150px] rounded-[50%]'>
            <img className='h-[100%] rounded-[50%]' src="../../src/assets/images/Home/30.jfif" alt="" />
          </div>
          <h2 className='font-bold'>سماعات اذن</h2>
          <span className='text-gray-400'>150 منتج</span>
        </div>
      </div>
    </div>
  )
}

export default Categories
