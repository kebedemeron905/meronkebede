import React, { Component } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
