import React from 'react'
import Carousel, { CarouselItem } from '../Carousel/carousel'
import chessImg from '../../assets/chessImg.png'
import wordleImg from '../../assets/wordleImg.png'
import pingImg from '../../assets/pingImg.png'
import './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
      <div className='projectsContainer'>
        <span className='projectsTitle'>My Projects</span>
        <span className='projectsDesc'>Here is a small collection of projects I have made throughout my coding career.</span>
        <Carousel className='projectCarousel' width='30vw'>
          <CarouselItem>
            <div className='projectItem'>
              <img src={chessImg} alt='Chess Game' className='projectImg'></img>
              <div className='projectText'>
                <h2 className='projectTitle'>Chess game</h2>
                <p className='projectDesc'>I created a fully featured Chess game with 4 bots and Stockfish support using C++ and the SFML graphics library</p>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className='projectItem'>
              <img src={wordleImg} alt='Wordle Game' className='projectImg'></img>
              <div className='projectText'>
                <h2 className='projectTitle'>Wordle Inspired Game</h2>
                <p className='projectDesc'>I developed a wordle inspired web game with javascript using Angular.js for the backend and hosting with Azure</p>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className='projectItem'>
              <img src={pingImg} alt='Network Tester' className='projectImg'></img>
              <div className='projectText'>
                <h2 className='projectTitle'>Network Packet Loss Analyzer</h2>
                <p className='projectDesc'>I created an end-to-end network analyzer to test VCU's Wi-fi network for packet loss in Java and C.</p>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </section>
  )
}

export default Projects