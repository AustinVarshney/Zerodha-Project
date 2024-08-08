import React, { useEffect } from 'react'
import Topbar from '../components/Topbar'
import Menu from '../components/Menu'
import Watchlist from '../components/Watchlist'
import Position from "../components/Position"
import axios from 'axios';

const Positions = () => {
  useEffect(() => {
    axios.get("https://zerodha-project-backend.onrender.com/").then((res) => {
      // console.log(res);
    })
  }, [])

  return (
    <div className='outerHomeDiv'>
      <div className='innerHomeDiv1'>
        <div className='innerMostHomeDiv1'>
          <Topbar/>
        </div>
        <div className='innerMostHomeDiv2'>
          <Watchlist/>
        </div>
      </div>
      <div className='innerHomeDiv2'>
        <div className='innerMostHomeDiv3'>
          <Menu/>
        </div>
        <div className='innerMostHomeDiv4'>
          <Position/>
        </div>
      </div>
    </div>
  )
}

export default Positions
