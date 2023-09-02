import React from 'react'
import {BiBell} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'

function Nav() {
  return (
    <div className='ml-96 mt-10 flex'>
        <h1 className='text-2xl font-montserrat font-semibold'>Dashboard</h1>
        <input type='text' placeholder='Search...'  className='rounded-xl ml-[500px] w-48 h-[30px] px-4 border-[1px]'></input>
        <BiBell size={24} className='ml-4 mt-1'/>
        <FaUserCircle size={24} className='ml-4 mt-1'/>
    </div>
  )
}

export default Nav