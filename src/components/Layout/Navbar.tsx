import React, { useState } from 'react'
import Titles from './Titles'
import Details from './Details'

const Navbar = () => {
  const [closed, setClosed] = useState<number>(1);

  return (
    <div className='Navbar'>
      <Details setClosed={setClosed}/>
      <Titles closed={closed} setClosed={setClosed}/>
    </div>
  )
}

export default Navbar
