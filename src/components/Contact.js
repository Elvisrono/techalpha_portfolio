import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6zuhvij', 'template_xjou9na', form.current, 'seI6qCeoXP-t6dMfw')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Message Sent Succefully !')
        }, (error) => {
            console.log(error.text)
        })
    }
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
        <form className='contactform' ref={form} onSubmit={sendEmail}>
            <input className='name' type='text' placeholder='Your Name' name='name'></input>
            <input className='email' type='email' placeholder='Your Email' name='email'></input>
            <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
            <button className='submitbtn' type='submit' value="Send">Submit</button>
        </form>
    </div>
   </section>
  )
}

export default Contact
