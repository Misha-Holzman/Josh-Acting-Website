import React, { Component } from 'react'
import './style.css'

class About extends Component {
  render () {
    return (
      <div className='about-main-container'>
        <h3 className='about-title-text'>About me</h3>
        <div className='about-text-main-container'>
          <div className='about-text-container-left'>
            <p className='about-me-text'>Lorem ipsum dolor sit amet consectetuer adipiscing elit. Eu magna augue taciti scelerisque facilisis orci in sollicitudin bibendum fames. Duis ridiculus viverra massa gravida. Etiam eget ac aliquet posuere blandit pede ut justo proin habitasse odio hac. Risus quisque laoreet lacinia mi at odio. Neque eget gravida adipiscing lobortis id semper sed ut mollis ridiculus.</p>
          </div>
          <div className='about-text-container-right'>
            <p className='about-me-text'>Facilisi morbi vel consectetuer etiam arcu nibh fames vestibulum eros class tempor. Ad sociosqu eros primis et dictumst nonummy cubilia platea proin! Ac mollis? Et platea tincidunt potenti curabitur litora habitant parturient. Varius dolor sollicitudin at litora sollicitudin. Inceptos proin vulputate senectus in ipsum eu vulputate netus mi lectus pharetra.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About