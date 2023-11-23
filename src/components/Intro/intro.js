import React from 'react'
import "./intro.css";
import bg from "../../assets/SHEIKH MAJID TARIQUE.jpeg"

import { Link } from 'react-scroll';
import btnImg from "../../assets/hireme.png"

const Intro = () => {
  return (
      <section id='intro'>
          {/* left part of intro */}
          <div className='introContent'>
              <span className='hello'>Hello,</span>
              <span className='introText'>I'm <span className='introName'>Shaikh Majid</span> <br /> Mern Full Stack Developer</span>
              
              <p className='intropara'>
                  I'm a Full Stack Developer with a good command. I'm passionate about building beautiful <br/> and functional websites and applications. I'm also passionate about JAVA and learning new <br/> technologies and technologies that make my life easier.
              </p>

              <Link><button className='btn'>
                  <img src={btnImg} alt='hireme' className='btnImg' />
                  Hire Me
         </button></Link>

          </div>
          
          
          {/* right part intro */}

          <img src={bg} alt='Profile' className='bg'/>
      </section>
  )
}

export default Intro;