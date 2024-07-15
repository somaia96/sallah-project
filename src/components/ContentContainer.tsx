import React from 'react'
import ListContainer from './products/products'
import Filter from './categories/Filter'

const ContentContainer = () => {
  
  return (
    <div className='ContentContainer py-[24px] sm:p-[40px] md:px-0'>
      <div className="container px-[--spacing-lg] sm:px-[--spacing-2xl] flex justify-between gap-10">
      <ListContainer/>
      <Filter/>
      </div>
    </div>
  )
}

export default ContentContainer
