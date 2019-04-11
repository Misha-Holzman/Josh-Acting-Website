import React, { Component } from 'react'
import ContactForm from '../ContactForm'
import './style.css'

class Contact extends Component {
  render () {
    return (
      <div className='contact-main-container'>
        <p className='contact-title'>Contact me</p>
        <p className='contact-description'>
        Shoot me an email about any inquiries. I’m always happy to chat!
        </p>
        <div className='contact-form-container'>
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default Contact


// Ikon Images / Alamy Stock Photo