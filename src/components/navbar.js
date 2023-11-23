import React from 'react'
import "./navbar.css"
import logo from "../assets/logo.png"
import { Link } from "react-scroll";
import contactImg from "../assets/contact.png"
const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      
      <div className='desktopMenu'>
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100 } duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50 } duration={500} 
          className='desktopMenuListItem'>About</Link>
        <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50 } duration={500} 
          className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass="active" to='contactPage' spy={true} smooth={true} offset={-100 } duration={500} 
          className='desktopMenuListItem'>Contact</Link>
      </div>

      <button className='desktopMenubtn ' >

        <img src={contactImg} alt='contactImg'
      
          className='contactImg'
        />
        Contact Me
      </button>
      </nav>
  )
}

export default Navbar