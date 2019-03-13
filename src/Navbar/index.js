import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Homepage from '../Homepage'
import Reel from '../Reel'
import Credits from '../Credits'
import Images from '../Images'
import About from '../About'
import Media from '../Media'
import Contact from '../Contact'

import './style.css'

class Navbar extends Component {
  render () {
    return (
      <Router>
        <div className='nav-container'>
          <div className='nav-bullets-div'>
            <ul className='nav-ul-container-left topBotomBordersOut'>
              <li className='nav-li-item'>
                <Link className='nav-li-link' to='/about'><span className='link-span'>About</span></Link>
              </li>
              <li className='nav-li-item'>
                <Link className='nav-li-link' to='/images'><span className='link-span'>Images</span></Link>
              </li>
              <li className='nav-li-item-media'>
                <Link className='nav-li-link' to='/media'><span className='link-span'>Media</span></Link>
              </li>
            </ul>
            <div className='joshs-name-div'>
              <Link id='nav-li-link-title' to='/'>
                <h1 className='josh-name-big Title'>
                  <span class='u-shadow'>JOSH GREGORY</span></h1>
              </Link>
            </div>
            <ul className='nav-ul-container-right topBotomBordersOut'>
              <li className='nav-li-item-reel'>
                <Link className='nav-li-link' to='/reel'><span className='link-span'>Reel</span></Link>
              </li>
              <li className='nav-li-item'>
                <Link className='nav-li-link' to='/credits'><span className='link-span'>Credits</span></Link>
              </li>
              <li className='nav-li-item'>
                <Link className='nav-li-link' to='/contact'><span className='link-span'>Contact</span></Link>
              </li>
            </ul>
          </div>
          <Route path='/' exact component={Homepage} />
          <Route path='/about' component={About} />
          <Route path='/images' component={Images} />
          <Route path='/reel' component={Reel} />
          <Route path='/media' component={Media} />
          <Route path='/credits' component={Credits} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    )
  }
}

export default Navbar
