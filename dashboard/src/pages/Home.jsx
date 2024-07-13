import React from 'react'
import "./Home.css"
import Topbar from '../components/Topbar'
import Menu from '../components/Menu'
import Watchlist from '../components/Watchlist'
import Summary from '../components/Summary'

const Home = () => {
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
          <Summary/>
        </div>
      </div>
    </div>
  )
}

export default Home
