import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img alt=''/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={20} duration={700} className='menulist'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Clients</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView ({behavior: 'smooth'}) 
        }} duration={500} offset={-10}>Contact Me</button>
        <img alt='' onClick={() =>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display:showMenu? 'flex': 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={() =>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={() =>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={() =>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={() =>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={() =>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
