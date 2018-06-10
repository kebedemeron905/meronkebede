import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render () {
    return (
      <div id='contact' className='contact-container'>
        <h1 className='contact-h1'> Contact</h1>
        <p className='contact-pp'>Would love to hear from you!</p>
        <div className='icons'>
          <a href='https://github.com/kebedemeron905'target='_blank' rel='noopener noreferrer' className='fab fa-github animated-hover' />
          <a className='linkedin' href='https://www.linkedin.com/in/meron-kebede-236aa2109/' target='_blank' rel='noopener noreferrer' className='fab fa-linkedin' />
          <a href='mailto:kebedemeron905@gmail.com' target='_blank' rel='noopener noreferrer' className='fa fa-envelope' />
        </div>
      </div>
    )
  }
}

export default Contact
