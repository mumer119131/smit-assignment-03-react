import React from 'react'
import './header.css'
import BUILDING_IMG from '../../assets/building_img_1.jpg'
const Header = () => {
  return (
    <section>
      <div className="container header__container">
        <img src={BUILDING_IMG} alt="building image" />
        <h2><span>BR</span> Architects</h2>
      </div>
    </section>
  )
}

export default Header