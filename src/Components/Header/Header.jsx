import React from 'react'
import './Header.css'
function Header() {
  return (
    <nav className='nav-bar'>
     <div className="left-section">
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" className="logo" />
      <ul>
        <li className='active'>Home</li>
        <li>Tv Shows</li>
        <li>Movies</li>
        <li>More & Popular</li>
        <li>My List</li>
      </ul>
     </div>
     <div className="rigth-section">
     <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" className="avatar" />
     </div>
    </nav>
  )
}

export default Header
