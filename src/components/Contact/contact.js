import React  from 'react'
import "./contact.css"
import FacebookIcon from "../../assets/facebook-icon.png"
import TwitterIcon from "../../assets/twitter.png"
import YouTubeIcon from "../../assets/youtube.png"
import InstagramIcon from "../../assets/instagram.png"
import GitHub from "../../assets/GitHub-logo.png"
import emailjs from '@emailjs/browser';
import { useRef } from "react"

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9bjqpyj', 'template_ar4l0yv', form.current, 'eGfoL1YGMAkDSTqO4XcOx')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent Successfully!")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (

      <section id='contactPage'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>
              Please fill out the form below to discuss any work opportunities
          </span>

          <form className='contactForm' ref={form} onSubmit={sendEmail}>
              
              <input type='text' className='name' 
                  placeholder='Enter Your Name here...'
                  name='your_name'
              />
              <input type='email' className='name'
                  placeholder='Enter Your Email here...'
                  name='your_email'
              />

              <textarea className='name'
                  rows={8}
                  placeholder='Enter Your Message here...'
              name='message'></textarea>
              
              
              
          </form>
          <button type='submit' value="Send" className='submitBtn'>Submit</button>
          

          <div className='links'>
              <img src={TwitterIcon } alt='Twitter' className='link' />
              <img src={ YouTubeIcon} alt='Youtube' className='link' />
              <img src={FacebookIcon } alt='Facebook' className='link' />
              <img src={InstagramIcon} alt='Instagram' className='link' />
              <img src={ GitHub}  alt='' className='link'/>
          </div>
    </section>
  )
}

export default Contact