import React from 'react'
import pic1 from "../assets/screen1.png"
import pic2 from "../assets/screen2.png"
import pic3 from "../assets/screen3.png"
import pic4 from "../assets/screen4.png"
import pic5 from "../assets/screen5.png"
import pic6 from "../assets/screen6.png"

const Works = () => {
  return (
  <section id='works'>
    <h2 className='workstitle'>My Portfolio</h2>
    <span className='worksdesc'>
      I take pride in paying attention to the smallest details and provide more proffesional work.
    </span>
    <div className='worksimages'>
      <a href='https://sidebar-seven-inky.vercel.app/' target="_blank"><img src={pic1} alt='pi' className='worksimage'/></a>
      <a href='https://tech-alpha-agecalculator.vercel.app/' target="_blank"><img src={pic2} alt='pi' className='worksimage'/></a>
      <a href='https://tech-alpha-todolist.vercel.app/' target="_blank"><img src={pic3} alt='pi' className='worksimage'/></a>
      <a href='https://shopping-cart-two-gules.vercel.app/' target="_blank"><img src={pic4} alt='pi' className='worksimage'/></a>
      <a href='https://recipe-app-five-amber.vercel.app/' target="_blank"><img src={pic5} alt='pi' className='worksimage'/></a>
      <a href='https://article254.vercel.app/' target="_blank"><img src={pic6} alt='pi' className='worksimage'/></a>
    </div>
    <button className='workbtn'><a href='https://github.com/Elvisrono' target='_blank'>See More</a></button>
  </section>
  )
}

export default Works
