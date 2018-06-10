import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      <div id='about'>
        <h1 className='about-h1'>About Me</h1>
        <div className='about-me'>
          <img className='headshot' src='/images/meron.png' alt='headshot' />
          <div className='about-pp'>
            <p className='about-line'> I love using code to give people the platform to tell their stories. It’s powerful and exhilarating. I'm equally ecstatic about using my technical writing background to contribute to writing documentations for
              emerging technologies.</p>
            <p className='about-line'>My favorite stack right now is React on the frontend and Django on the backend!</p>
            <p className='about-line'>Outside the browser, you'll most likely find me at a Cuban salsa event, reading contemporary fiction, or helping local high
                          school students with their college application process.
            </p>
            <div className='skills-continer'>
              <h1 className='skills-h1'>Skills</h1>
              <ul className='skills-list'>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Git</li>
                <li>Node</li>
                <li>Express</li>
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Python</li>
                <li>React</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default About
