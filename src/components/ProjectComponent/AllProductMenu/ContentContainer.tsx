import React from 'react'
import ListContainer from './ListContainer'
import Filter from './Filter'

const ContentContainer = () => {
  return (
    <div className='ContentContainer py-[24px] sm:p-[40px]'>
      <div className="container px-[8px] sm:px-[32px] flex justify-between gap-10">
      <ListContainer/>
      <Filter/>
      </div>
    </div>
  )
}

export default ContentContainer
