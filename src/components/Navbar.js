import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='desktopMenu'>
            <Link className='menulist'>Home</Link>
            <Link className='menulist'>About</Link>
            <Link className='menulist'>Portfolio</Link>
            <Link className='menulist'>Clients</Link>
        </div>
        <button className='desktopMenuBtn'>Contact Me</button>
    </nav>
  )
}

export default Navbar
