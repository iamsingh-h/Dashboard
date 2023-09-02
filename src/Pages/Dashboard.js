import React from 'react'
import Menu from '../Components/Menu'
import Nav from '../Components/Nav'
import Card from '../Components/Card'


function Dashboard() {
  return (
    <div className='bg-neutral-100 flex'>
      <div className='left'>
        <Menu/>
      </div>
      <div className='right'>
        <Nav/>
        <Card/>
        
      </div>

    </div>
  )
}

export default Dashboard