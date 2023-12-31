import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import ghIcon from '../../assets/githubIconLight.png';
import linkedInIcon from '../../assets/linkedinIcon.png';
import indeedIcon from '../../assets/indeedIcon.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dbiwaws', 'template_k80pkof', form.current, 'sIcmdMZrACEUxWQC4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact">
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'>Please email me at
        <a className='contactDesc' href='mailto: zachariahdellimore03@gmail.com'>zachariahdellimore03@gmail.com</a>
        or fill out the form below to get in touch</span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name='from_name'/>
        <input type='text' className='email' placeholder='Your Email' name='from_email'/>
        <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
        <button type='submit' value='Send' className='submitBtn'>Submit</button>
        <div className='links'>
          <div className='linkContainer' onClick={() => {window.open('https://github.com/Party14534', '_blank');}}>
            <img src={ghIcon} alt='Github' className='link'></img>
          </div>  
          <div className='linkContainer' onClick={() => {window.open('https://www.linkedin.com/in/zachariah-dellimore-8630ba161/', '_blank');}}>
            <img src={linkedInIcon} alt='Linkedin' className='link'></img>
          </div>
          <div className='linkContainer' onClick={() => {window.open('https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage', '_blank');}}>
            <img src={indeedIcon} alt='Indeed' className='link'></img>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact