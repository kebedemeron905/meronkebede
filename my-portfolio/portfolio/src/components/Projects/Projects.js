import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
  render () {
    return (
      <div id='projects'>
        <h1 className='projects-h1'>Projects</h1>
        <div className='projects-container'>
          <div className='scrolling-wrapper'>
            <div className='project-show'>
              <h1 className='project-name'>BookshelV</h1>
              <p className='project-description'><span className='app'>App:</span> A virtual bookshelf app that allows users <br /> to track the books they've read.</p>
              <div className='icon-container'>
                <h4 className='tools-used'>Tools Used: <span>MongDB, Express, Node</span></h4>
                <i className='devicon-mongodb-plain' />
                <i className='devicon-express-original' />
                <i className='devicon-nodejs-plain' />
              </div>
              <div className='project-link-container'>
                <a href='https://github.com/kebedemeron905/Project-two' className='project-link' target='_blank' rel='noopener noreferrer'>View Code</a>
                <a href='https://bookshelv.herokuapp.com/books' className='project-link' target='_blank' rel='noopener noreferrer'>Deployed App</a>
              </div>
              <img className='project-img'src='/images/bookshelf.png' alt='bookshelf' />
            </div>
          </div>
          <div className='scrolling-wrapper'>
            <div className='project-show'>
              <h1 className='project-name'>Salsa in the DMV</h1>
              <p className='project-description'><span className='app'>App:</span> A salsa event tracker app for users <br /> in the DMV.</p>
              <div className='icon-container'>
                <h4 className='tools-used'>Tools Used: <span>Django</span></h4>
                <i className='devicon-django-plain' />
                <i className='devicon-python-plain' />
              </div>
              <div className='project-link-container'>
                <a href='https://github.com/kebedemeron905/Events' className='project-link' target='_blank' rel='noopener noreferrer'>View Code</a>
                <a href='https://salsaevents.herokuapp.com/accounts/login/?next=/' className='project-link' target='_blank' rel='noopener noreferrer'>Deployed App</a>
              </div>
              <img className='project-img'src='/images/salsa.png' alt='bookshelf' />
            </div>
          </div>
          <div className='scrolling-wrapper'>
            <div className='project-show'>
              <h1 className='project-name'>Famous Artworks</h1>
              <p className='project-description'><span className='app'>App:</span> A simple JavaScript flash card game that <br /> asks users to identify title of iconic artworks.</p>
              <div className='icon-container'>
                <h4 className='tools-used'>Tools Used: <span>HTML, CSS, JavaScript</span></h4>
                <i className='devicon-html5-plain' />
                <i className='devicon-css3-plain' />
                <i className='devicon-javascript-plain' />
              </div>
              <div className='project-link-container'>
                <a href='https://github.com/kebedemeron905/Project-One' className='project-link' target='_blank' rel='noopener noreferrer'>View Code</a>
                <a href='https://kebedemeron905.github.io/Project-One/' className='project-link' target='_blank' rel='noopener noreferrer'>Deployed App</a>
              </div>
              <img className='project-img'src='/images/artworks.png' alt='bookshelf' />
            </div>
          </div>

        </div>
      </div>

    )
  }
}

export default Projects
