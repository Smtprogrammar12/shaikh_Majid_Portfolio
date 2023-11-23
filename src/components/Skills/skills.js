import React from 'react'
import "./skills.css"
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

const Skills = () => {
  return (
      <section id='skills'>
          <span className='skillTitle'>What I do</span>
          <span className='skillContent'>
               I'm passionate about building beautiful and functional websites and applications. I'm also passionate about JAVA and learning new  technologies and technologies that make my life easier.
          </span>
         {/* bada wala dabba */}
          <div className='skillBars'>
              {/* first dabbs */}
              <div className='skillBar'>
                  <img src={UIDesign} alt='Uidesign' className='skillBarImg' />
                  
                  {/* text wala dabaa */}
                  <div className='skillbarText'>
                      <h1>UI/UX Design</h1>
                      <p>This is a demo text, We can write Our Content later!!</p>
                  </div>
              </div>

               {/* second  dabba */}
              <div className='skillBar'>
                  <img src={WebDesign} alt='Webdesign' className='skillBarImg' />
                  
                  {/* text wala dabaa */}
                  <div className='skillbarText'>
                      <h1>Website Design</h1>
                      <p>This demo text can be change while making the production raedy website.</p>
                  </div>
              </div>

               {/* third wala dabba */}
              <div className='skillBar'>
                  <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                  
                  {/* text wala dabaa */}
                  <div className='skillbarText'>
                      <h1>APP Design</h1>
                      <p>This App Design demo Section.</p>
                  </div>
              </div>
          </div>
   </section>
  )
}

export default Skills