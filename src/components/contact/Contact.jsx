import React from 'react'
import './contact.css'
import MAP_IMG from '../../assets/map.jpg'

const Contact = () => {
  return (
    <div className='container contact__container' id='contact'>
      <h2>Contact</h2>
      <hr />
      <p>Get in touch and talk about our new project</p>
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='Email'/>
      <input type="text" placeholder='Subject'/>
      <input type="text" placeholder='Comment'/>
      <button>SEND MESSAGE</button>
      <img src={MAP_IMG} alt="" />
    </div>
  )
}

export default Contact