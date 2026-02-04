import React from 'react'
import { Link } from 'react-router-dom'

const Conenct = () => {
  return (
    <>
    <div className='menu'>
        <h1>MOVIE INFO.</h1>
      <nav className='menu1'>
        <ul type='none'>
            <li><Link to='/' className='link'>HOME</Link></li>
            <li><Link to='/COMING SOON' className='link'>COMING SOON</Link></li>
            <li><Link to='/ABOUT US' className='link'>ABOUT US</Link></li>
            <li><Link to='/CONTACT' className='link'>CONTACT</Link></li>
        </ul>
      </nav>
      </div>
    </>
  )
}

export default Conenct
