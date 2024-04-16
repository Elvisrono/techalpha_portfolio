import React from 'react'
import { Link } from 'react-scroll'

const Inro = () => {
  return (
    <section id="intro">
        <div className='introcontent'>
            <span className='hello'>Hello, </span>
            <span className='introtext'>I'm <span className='introname'>Elvis</span> <br />Website Designer</span>
            <p className='intropara'>I am a skilled web designer with experience in creating<br /> visually appealing and user friendly websites.</p>
            <Link><button className='btn'>Hire me</button></Link>
        </div>
      
    </section>
  )
}

export default Inro
