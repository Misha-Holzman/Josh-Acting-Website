import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './style.css'

class Homepage extends Component {
  render () {
    return (
      <div className='home-page-main-container'>
        <div className='home-page-content-container'>
          <img className='homepage-img-of-josh' src='https://i.imgur.com/NDw5Fzd.jpg' />
        </div>
        <a href='#real-jump-link' id='arrow-link'>
          <img
            src='https://i.imgur.com/T5f8v9i.png'
            height='30px'
            className='arrow'
          />
        </a>
        <div className='homepage-alternate-background-color'>
          <h3 className='video-text' id='real-jump-link'>Reel</h3>
          <ReactPlayer
            url='https://vimeo.com/318350985' 
            id='player'
          />
        </div>
      </div>
    )
  }
}

export default Homepage
