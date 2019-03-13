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
          <img className='media-tab-imgs-of-josh' src='https://i.imgur.com/CuUDmBc.png' />
          <img className='media-tab-imgs-of-josh-small' src='https://i.imgur.com/pJbEz7B.png' />
        </div>
        {/* <div className='Media-credit-div'>
          <h6 className='Media-giving-credit-text'>Media by <a href='http://www.davidnoles.com/' target='_blank' className='link-to-headshot-guy'>David Noles Photography</a></ h6>
        </div> */}
      </div>
    )
  }
}

export default Media


// https://www.imdb.com/name/nm9801389/?ref_=nv_sr_1
// imdb link ^
