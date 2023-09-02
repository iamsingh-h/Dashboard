import React from 'react'

function Menu() {
  return (
    <menu className='bg-black absolute w-72 h-[735px] rounded-xl ml-10 mt-10 text-white font-montserrat'>
        <h1 className='ml-5 mt-14 text-4xl font-semibold'>Board.</h1>
        <ul className='space-y-5 mt-5 ml-5'>
          <li>Dashboard</li>
          <li>Transactions</li>
          <li>Schedules</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
        <ul className='text-sm ml-5 mt-80 space-y-5'>
          <li>Help</li>
          <li>Contact us</li>
        </ul>

    </menu>
  )
}

export default Menu