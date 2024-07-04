import React from 'react'
import { Separator } from "../../ui/separator"
const TopHeader = () => {
  return (
    <div className='TopHeader p-[8px] bg-gray-50 text-gray-400'>
          <div className="container flex justify-center md:justify-between">
      <div className="contact hidden md:block flex gap-4">
      <ul className='flex h-3 items-center space-x-4 text-sm'>
      <li>تواصل معنا</li>

        <Separator orientation="vertical" />
          <li>سياسة الإستبدال أو الاسترجاع</li>
        <Separator orientation="vertical" />
        <li>المفضلة</li>

        <Separator orientation="vertical" />
        <li><span>*</span>العربية - رس</li>

        </ul>
       
      </div>
      <div className="numbers flex gap-4">
      <div className="flex h-3 items-center space-x-4 text-sm">
      <span>support@salla.sa <span>*</span></span>
        <Separator orientation="vertical" />
        <span>+966556754472 <span>*</span></span>
      </div>
        </div>
        </div>
    </div>
  )
}

export default TopHeader
