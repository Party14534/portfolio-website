import React from 'react';

import './aboutme.css';

const AboutMe = () => {
  return (
    <section id='aboutme'>
      <span className='aboutmeTitle'>About Me</span>
      <div className='aboutmeCntnr'>
        <span className='aboutmeDesc'>
          My name is Zachariah Dellimore; I am an African American software developer based in Richmond, Virginia. 
          I am currently a Junior at Virginia Commonwealth University. I am majoring in Computer Science and minoring in Math with a GPA of 3.83. 
          I went to high school at Western Albemarle High School and graduated Magna Cum Laude with an advanced degree and a GPA of 3.7.
        </span>
        <span className='aboutmeDesc'>
          I was on my high school's robotics team, where I started as a programmer for my team, Cable Management. 
          After my first year, I became the leader of Cable Management and had to manage the building, programming, and teaching of my team.
          Teaching my team members how to code increased my love of coding and improved my understanding of how to code.
          The leadership experience I gained from that experience has stuck with me and has allowed me to become a better team member and leader. These skills have improved my group projects' efficiency and quality.
        </span>
        <span className='aboutmeDesc'>
          Outside of school, I prefer to spend my time coding projects that interest me and playing video games. 
          Some projects that I have made are a Wordle inspired web game using javascript, 
          a messaging app made in the C programming language using C's the built in networking functions, 
          and an fully featured Chess game with 4 bots and Stockfish support using C++ and the SFML graphics library.
        </span>
      </div>
    </section>
  )
};

export default AboutMe
