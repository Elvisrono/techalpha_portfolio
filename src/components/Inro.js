import React from 'react'
import { Link } from 'react-scroll'
import image from "../assets/image1.jpg"

const Inro = () => {
  return (
    <section id="intro">
        <div className='introcontent'>
            <span className='hello'>Hello, </span>
            <span className='introtext'>I'm <span className='introname'>Elvis</span> <br />Website Designer</span>
            <p className='intropara'>I am a skilled web designer with experience in creating<br /> visually appealing and user friendly websites.</p>
            <Link><button className='btn'>Hire me</button></Link>
        </div>
        <img src={image} alt="profile" className='bg'/>
    </section>
  )
}

export default Inro
