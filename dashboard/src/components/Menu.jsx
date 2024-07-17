import React, { useState } from 'react'
import "./Menu.css"
import logoImg from "../../src/assets/logo.png"

const Menu = () => {
  let [activeMenu, setActiveMenu] = useState(0);

  const activeClass = (index) => {
    setActiveMenu(index)
    console.log(activeMenu)
  }

  const menu = "menu";
  const selectedMenu = "selected-menu";

  return (
    <div className='outerMenuDiv'>
      <div className='innerMenuDiv1'>
        <img src={logoImg} />
      </div>
      <div className='innerMenuDiv2'>
        <ul>
          <li><a href="/" className={activeMenu===0 ? selectedMenu : menu} onClick={() => activeClass(0)}>Dashboard</a></li>
          <li><a href="/orders" className={activeMenu===1 ? selectedMenu : menu} onClick={() => activeClass(1)}>Orders</a></li>
          <li><a href="/holdings" className={activeMenu===2 ? selectedMenu : menu} onClick={() => activeClass(2)}>Holdings</a></li>
          <li><a href="/positions" className={activeMenu===3 ? selectedMenu : menu} onClick={() => activeClass(3)}>Positions</a></li>
          <li><a href="/funds" className={activeMenu===4 ? selectedMenu : menu} onClick={() => activeClass(4)}>Funds</a></li>
          <li><a href="/apps" className={activeMenu===5 ? selectedMenu : menu} onClick={() => activeClass(5)}>Apps</a></li>
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
