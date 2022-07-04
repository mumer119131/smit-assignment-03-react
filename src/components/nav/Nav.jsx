import React from 'react'
import './nav.css'
const Nav = () => {
  return (
    <header>
      <nav>
        <h2>BR <span>Architects</span></h2>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav