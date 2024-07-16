import React from 'react'
import Head from './Head'

const Brands = () => {
  return (
    <div className='py-[--spacing-3xl]'>
            <Head title="الماركات التجارية" description='يمكنك التسوق من خلال الماركات التجارية'/>
<div className="content [filter:grayscale(1)] flex justify-between items-stretch gap-5 max-h-[100px]">
  <div className='flex-1 overflow-hidden p-3 flex justify-center items-center border rounded-[5px]'><img src="../../src/assets/images/Home/oppo.png" alt="" /></div>
  <div className='flex-1 overflow-hidden p-3 flex justify-center items-center border rounded-[5px]'><img src="../../src/assets/images/Home/joyroom.png" alt="" /></div>
  <div className='flex-1 overflow-hidden p-3 flex justify-center items-center border rounded-[5px]'><img src="../../src/assets/images/Home/samsung.png" alt="" /></div>
  <div className='flex-1 overflow-hidden p-3 flex justify-center items-center border rounded-[5px]'><img src="../../src/assets/images/Home/oppo.png" alt="" /></div>
  <div className='flex-1 overflow-hidden p-3 flex justify-center items-center border rounded-[5px]'><img src="../../src/assets/images/Home/joyroom.png" alt="" /></div>
</div>
    </div>
  )
}

export default Brands
