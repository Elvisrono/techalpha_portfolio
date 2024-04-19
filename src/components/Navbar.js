import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img alt=''/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Clients</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView ({behavior: 'smooth'}) 
        }}>Contact Me</button>
        <img alt=''/>
    </nav>
  )
}

export default Navbar
