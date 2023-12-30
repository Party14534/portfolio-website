import React from 'react';
import bg from '../../assets/bg.jpg';
import btnImage from '../../assets/githubIcon.png';
import { Link } from 'react-scroll';
import './intro.css';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello, </span>
        <span className='introText'>
          I'm 
          <span className='introName'> Zach</span>
        </span>
        <p className='introPara'>I am a skilled programmer with lots of experience developing web
                                  and desktop apps on Windows, Linux, and Mac</p>
        <Link to=''>
          <button className='btn' onClick={() => {window.open('https://github.com/Party14534?tab=repositories', '_blank');}}>
            <img src={btnImage} alt='Github Icon' className='btnImg'/> My Projects
          </button>
        </Link>
      </div>
      <img src={bg} alt='Profile' className='bg'></img>
    </section>
  )
}

export default Intro