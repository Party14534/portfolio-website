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
      <iframe src="https://docs.google.com/viewer?srcid=1bI-KAz7zMgD96oSYn-TmFxWq47ts33ya&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title='My Resume' className='resumeFrame' alt='My Resume'/>
    </section>
  )
}

export default Resume