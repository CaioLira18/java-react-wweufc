import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className="logoContainer">
        <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1761361945/TKO_Group_Holdings_logo.svg_rfmskw.png" alt="" />
      </div>
      <div className="nav-links">
        <div className="nav-link">
            <ul>
                <a href="/"><li>Home</li></a>
            </ul>
        </div>
        <div className="nav-link">
            <ul>
                <a href="/lutadores"><li>Lutadores</li></a>
            </ul>
        </div>
        <div className="nav-link">
            <ul>
                <li>Campeões</li>
            </ul>
        </div>
        <div className="nav-link">
            <ul>
                <li>Proximos Eventos</li>
            </ul>
        </div>
        <div className="nav-link">
            <ul>
                <li>WWE</li>
            </ul>
        </div>
        <div className="nav-link">
            <ul>
                <li>UFC</li>
            </ul>
        </div> 
      </div>
    </div>
  )
}

export default Header
