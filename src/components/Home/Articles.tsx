import React from 'react'
import Head from './Head'

const Articles = () => {
  return (
    <div className='py-5'>
      <Head title="احدث المقالات" description='تسوق احدث المنتجات المميزة المضافة جديد' />
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='flex-1 flex flex-col gap-5 items-center text-center text-lg'>
          <div className='w-[100%] flex items-center justify-center md:h-[133px] lg:h-[184px] overflow-hidden'>
            <img className='w-[100%] h-[auto]' src="../../src/assets/images/Home/9.jfif" alt="" />
          </div>
          <h2 className='font-bold'>مدى تأثير التكنولوجيا على حياة الإنسان</h2>
          <p className='text-gray-400'>لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات المطلوبة، إذا لم يكن لديك فكرة، سنشارك في هذه المقالة قائمة أنواع المنتجات</p>
        </div>
        <div className='flex-1 flex flex-col gap-5 items-center text-center text-lg'>
          <div className='w-[100%] flex items-center justify-center md:h-[133px] lg:h-[184px] overflow-hidden'>
            <img className='w-[100%] h-[auto]' src="../../src/assets/images/Home/10.png" alt="" />
          </div>
          <h2 className='font-bold'>مدى تأثير التكنولوجيا على حياة الإنسان</h2>
          <p className='text-gray-400'>لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات المطلوبة، إذا لم يكن لديك فكرة، سنشارك في هذه المقالة قائمة أنواع المنتجات</p>
        </div>
        <div className='flex-1 flex flex-col gap-5 items-center text-center text-lg'>
          <div className='w-[100%] flex items-center justify-center md:h-[133px] lg:h-[184px] overflow-hidden'>
            <img className='w-[100%] h-[auto]' src="../../src/assets/images/Home/7.jfif" alt="" />
          </div>
          <h2 className='font-bold'>مدى تأثير التكنولوجيا على حياة الإنسان</h2>
          <p className='text-gray-400'>لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات المطلوبة، إذا لم يكن لديك فكرة، سنشارك في هذه المقالة قائمة أنواع المنتجات</p>
        </div>
      </div>
    </div>
  )
}

export default Articles
