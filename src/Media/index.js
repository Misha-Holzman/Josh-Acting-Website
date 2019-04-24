import React, { Component } from 'react'
import './style.css'

class Media extends Component {
  render () {
    return (
      <div className='media-main-container'>
        <h1 className='media-header-text'>Media</h1>
        <div className='media-content-container'>
          <img className='media-tab-imgs-of-josh' src='https://i.imgur.com/695n38c.png' />
          <img className='media-tab-imgs-of-josh' src='https://i.imgur.com/MP5HeMD.png' />
          <img className='media-tab-imgs-of-josh-small' src='https://i.imgur.com/q22SvcL.jpg' />
          <img className='media-tab-imgs-of-josh-small' src='https://i.imgur.com/pJbEz7B.png' />
          <img className='media-tab-imgs-of-josh-small' src='https://i.imgur.com/45LXsua.png' />
          <img className='media-tab-imgs-of-josh-small' src='https://i.imgur.com/8hKI2e0.png' />
          <img className='media-tab-imgs-of-josh-small' src='https://i.imgur.com/4JOJysG.png' />
          <img className='media-tab-imgs-of-josh' src='https://i.imgur.com/CuUDmBc.png' />
        </div>
      </div>
    )
  }
}

export default Media
