import React from 'react'

const Contact = () => {
  return (
   <section id='contactpage'>
    <div id="clients">
        <h1 className='contactpagetitle'>My Clients</h1>
        <p className='clientdesc'>
            I have had the opportunity to work with a diverse group of companies.
            Some of the notable companies i have work ed with includes
        </p>
    </div>
    <div id='contact'>
        <h1 className='contactpagetitle'>Contact Me</h1>
        <span className='contactdesc'>Please fill out the form below to discuss any work opportunities</span>
        <form className='contactform'>
            <input className='name' type='text' placeholder='Your Name'></input>
            <input className='email' type='email' placeholder='Your Email'></input>
            <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
            <button className='submitbtn' type='submit' value="send">Submit</button>
        </form>
    </div>
   </section>
  )
}

export default Contact
