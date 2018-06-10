import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
  render () {
    return (
      <div id='nav' className='nav-bars'>
        <a href='#' className='home-nav'>Home</a>
        <a href='#about' className='about-nav'>About</a>
        <a href='#projects' className='proj-nav'>Projects</a>
        <a href='#contact' className='contact-nav'>Contact</a>
      </div>
    )
  }
}

export default Nav
