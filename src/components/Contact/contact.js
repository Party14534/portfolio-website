import React from 'react';
import './contact.css';
import ghIcon from '../../assets/githubIcon.png';
import linkedInIcon from '../../assets/linkedinIcon.png';
import emailIcon from '../../assets/emailIcon.png'

const Contact = () => {
  return (
    <div id="contact">
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'>Please fill out the form below to get in touch</span>
      <form className='contactForm'>
        <input type='text' className='name' placeholder='Your Name'/>
        <input type='text' className='email' placeholder='Your Email'/>
        <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
        <button type='submit' value='Send' className='submitBtn'>Submit</button>
        <div className='links'>
          <div className='linkContainer'>
            <img src={ghIcon} alt='Github' className='link'></img>
          </div>  
          <div className='linkContainer'>
            <img src={linkedInIcon} alt='Linkedin' className='link'></img>
          </div>
          <div className='linkContainer'>
            <img src={emailIcon} alt='Email' className='link'></img>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact