import React from 'react'

const Best = () => {
  return (
    <div className='flex gap-8 flex-col md:flex-row'>

      <div className='flex-1 text-right flex justify-start items-center text-xl bg-[url("../../../src/assets/images/Home/32.png")]'>
        <div className='flex-1'>
          <span className='text-gray-500'>سماعات ديجيتال</span>
          <h2 className='text-2xl font-bold'>أفضل صوت نقي</h2>
          <span>تسوق الان</span>
        </div>
        <div className='hidden lg:block lg:flex-1'></div>
        <div className='flex-1 h-[240px]'></div>

      </div>

      <div className='flex-1 text-right flex justify-start items-center text-xl bg-[url("../../../src/assets/images/Home/16.png")]'>
        <div className='flex-1'>
          <span className='text-gray-500'>سماعات ديجيتال</span>
          <h2 className='text-2xl font-bold'>أفضل صوت نقي</h2>
          <span>تسوق الان</span>
        </div>
        <div className='hidden lg:block lg:flex-1'></div>
        <div className='flex-1 h-[240px]'></div>

      </div>


    </div>
  )
}

export default Best
