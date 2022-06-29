import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Project from './components/projects/Projects'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App