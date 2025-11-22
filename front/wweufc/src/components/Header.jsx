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
                <a href="/eventos"><li>Proximos Eventos</li></a>
            </ul>
        </div>
         <div className="nav-link">
            <ul>
                <a href="/adminpage"><li>Painel de Admin</li></a>
            </ul>
        </div>
        <div className="nav-link">
            <ul>
                <a href="/wwe"><img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763598134/WWE_Logo.svg_b2gftp.png" alt="" /></a>
            </ul>
        </div>
        <div className="nav-link">
            <ul>
                <li><img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763735323/drilldown_qddjmf.png" alt="" /></li>
            </ul>
        </div> 
          <div className="nav-link">
            <ul>
                <li>
                    <div className="userHeader">
                        <a href="/login"><i class="fa-solid fa-user"></i>
                        <h3>Login</h3></a>
                    </div>
                </li>
            </ul>
        </div> 
      </div>
    </div>
  )
}

export default Header
