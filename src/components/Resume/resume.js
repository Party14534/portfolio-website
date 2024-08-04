import React from 'react';
import './resume.css';
//import pdf from '../../assets/RESUME.pdf';

const Resume = () => {
  return (
    <section id='resume'>
      <span className='resumeTitle'>Resume</span>
      <div className='resumeDesc'>
        <p>My resume showcases a culmination of my journey—highlighting my dedication C++ and Desktop Applications. I invite you to explore my personal and professional accomplishments and discover how my expertise can contribute to your next project or team.</p>
      </div>
      <iframe src="https://drive.google.com/file/d/1URxlBWjRPHiKfca8xO4hsEBfKls7A0Cb/preview" title='My Resume' className='resumeFrame' alt='My Resume'/>
    </section> 
  )
}

export default Resume
