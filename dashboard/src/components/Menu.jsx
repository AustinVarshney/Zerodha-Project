import React, { useState } from 'react'
import "./Menu.css"
import logoImg from "../../src/assets/logo.png"
import { Link, useLocation } from "react-router-dom"

const Menu = () => {
  let location = useLocation();
  let [activeMenu, setActiveMenu] = useState(0);

  // Update active state based on pathname
  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveMenu(0);
        break;
      case "/orders":
        setActiveMenu(1);
        break;
      case "/holdings":
        setActiveMenu(2);
        break;
      case "/positions":
        setActiveMenu(3);
        break;
      case "/funds":
        setActiveMenu(4);
        break;
      case "/apps":
        setActiveMenu(5);
        break;
      default:
        setActiveMenu(0); // Default to Dashboard
        break;
    }
  }, [location.pathname]);

  const menu = "menu";
  const selectedMenu = "selected-menu";

  return (
    <div className='outerMenuDiv'>
      <div className='innerMenuDiv1'>
        <img src={logoImg} alt="Logo"/>
      </div>
      <div className='innerMenuDiv2'>
        <ul>
          <li><Link to="/" className={activeMenu===0 ? selectedMenu : menu}>Dashboard</Link></li>
          <li><Link to="/orders" className={activeMenu===1 ? selectedMenu : menu}>Orders</Link></li>
          <li><Link to="/holdings" className={activeMenu===2 ? selectedMenu : menu}>Holdings</Link></li>
          <li><Link to="/positions" className={activeMenu===3 ? selectedMenu : menu}>Positions</Link></li>
          <li><Link to="/funds" className={activeMenu===4 ? selectedMenu : menu}>Funds</Link></li>
          <li><Link to="/apps" className={activeMenu===5 ? selectedMenu : menu}>Apps</Link></li>
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
