import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './style.css'


class Reel extends Component {
  render () {
    return (
      <div className='reel-main-container'>
        <div className='reel-content-container-div'>
          <h3 className='reel-title' id='real-jump-link'>Reel</h3>
          <ReactPlayer url='https://vimeo.com/318350985' className='vimeo-vid' />
        </div>
      </div>
    )
  }
}

export default Reel