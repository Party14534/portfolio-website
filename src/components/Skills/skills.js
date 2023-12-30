import React from 'react';
import './skills.css';
import WebDesign from '../../assets/UIDesign.png'
import DesktopApplication from '../../assets/DesktopApplication.png'
import MobileDesign from '../../assets/MobileDesign.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I Do</span>
      <span className='skillDesc'>I thrive in the realms of web design, mobile application development, and desktop application creation. I have a keen eye for detail and a passion for creating fun and friendly experiences for users. I am dedicated to delivering high-quality work and staying up to date with the latest technologies.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img className='skillBarImg' src={WebDesign} alt='Web Development'></img>
          <div className='skillBarText'>
            <h2>Web Development</h2>
            <p>I have a wealth of experience working with Node, React, and Angular as well as experience with Azure and AWS</p>
          </div>
        </div>
        <div className='skillBar'>
          <img className='skillBarImg' src={DesktopApplication} alt='Desktop Application Development'></img>
          <div className='skillBarText'>
            <h2>Desktop Application Development</h2>
            <p>I spend the majority of my time creating and testing Desktop applications for Windows and Linux using C++, Python, and Java.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img className='skillBarImg' src={MobileDesign} alt='Mobile App Development'></img>
          <div className='skillBarText'>
            <h2>Mobile App Development</h2>
            <p>I have experience designing, creating, and testing Android mobile apps using Jetpack Compose</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Skills