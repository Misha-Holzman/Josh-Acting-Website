import React, { Component } from 'react'
import './style.css'


class About extends Component {
  render () {
    return (
      <div className='about-main-container'>
        <div className='about-content-container'>
          <div className='about-josh-image-container'>
            <img src='https://i.imgur.com/UWFgowJ.jpg' className='about-josh-image' />
          </div>
          <div className='about-text-container'>
            <h3 className='about-me-title-text'>About me</h3>
            <p className='about-me-text'>I was born in raised in NYC surrounded by art and design. I love to create art and music in my free time and I cultivate my creative drive in web development. I studied business and management in college, and I have found that such a background gives me a great advantage when creating effective and engaging user experiences on a website.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About