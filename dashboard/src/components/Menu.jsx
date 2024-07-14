import React from 'react'
import "./Menu.css"
import logoImg from "../../src/assets/logo.png"

const Menu = () => {
  return (
    <div className='outerMenuDiv'>
      <div className='innerMenuDiv1'>
        <img src={logoImg} />
      </div>
      <div className='innerMenuDiv2'>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/holdings">Holdings</a></li>
          <li><a href="/positions">Positions</a></li>
          <li><a href="/funds">Funds</a></li>
          <li><a href="/apps">Apps</a></li>
          <li><a>
            <div>
              ZU
            </div>
            <p>USERID</p>
          </a></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
