import React from 'react'
import Titles from './Titles'
import Details from './Details'

const Navbar = () => {
  return (
    <div className='Navbar hidden'>
      <Details/>
      <Titles/>
    </div>
  )
}

export default Navbar
