import React from 'react'
import {FiUsers,FiThumbsUp} from 'react-icons/fi'
import {TbCash} from 'react-icons/tb'
import {CiShoppingTag} from 'react-icons/ci'


function Card() {
  return (
    <div className='flex mt-20 ml-96 space-x-8'>
        <div className='bg-green-200 rounded-xl w-52 h-28'>
          <TbCash size={25}className='mt-3 ml-40'/>
          <p className='font-lato text-sm ml-6 mt-3'>Total Revenues</p>
          <span className='font-sans text-2xl ml-6 font-semibold'>$2,129,430</span>
        </div>
        <div className='bg-orange-200 rounded-xl w-52 h-28'>
        <CiShoppingTag size={25}className='mt-3 ml-40'/>
          <p className='font-lato text-sm ml-6 mt-3'>Total Transactions</p>
          <span className='font-sans text-2xl ml-6 font-semibold'>1,520</span>
        </div>
        <div className='bg-red-200 rounded-xl w-52 h-28'>
        <FiThumbsUp size={25}className='mt-3 ml-40'/>
          <p className='font-lato text-sm ml-6 mt-3'>Total Likes</p>
          <span className='font-sans text-2xl ml-6 font-semibold'>9,721</span>
        </div>
        <div className='bg-blue-200 rounded-xl w-52 h-28'>
          <FiUsers size={25}className='mt-3 ml-40'/>
          <p className='font-lato text-sm ml-6 mt-3'>Total Users</p>
          <span className='font-sans text-2xl ml-6 font-semibold'>892</span>
        </div>




    </div>
  )
}

export default Card



