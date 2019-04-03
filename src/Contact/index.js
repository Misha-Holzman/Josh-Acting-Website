import React, { Component } from 'react'
import ContactForm from '../ContactForm'
import './style.css'

class Contact extends Component {
  render () {
    return (
      <div className='contact-main-container'>
        <p className='contact-title'>Contact Me</p>
        <div className='contact-form-container'>
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default Contact
