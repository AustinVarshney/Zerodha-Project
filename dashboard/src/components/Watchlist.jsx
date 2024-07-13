import React, { useState } from 'react'
import "./Watchlist.css"
import SearchIcon from '@mui/icons-material/Search';
import { watchlist } from '../assets/assets';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Tooltip } from 'react-tooltip';

const Watchlist = () => {
  let [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = (id, index) => {
    if(watchlist[index].id === id){
      setIsHovering(true);
      console.log(id)
    } else{
      setIsHovering(false);
      console.log("Working")
    }
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className='outerWatchlistDiv1'>
      <div className='innerWatchlistDiv1'>
        <SearchIcon style={{ color: "#616161" }} /><input type="text" placeholder='Search eg: infy, bse, nifty fut, nifty weekly, gold mcx' />
        <p>9/20</p>
      </div>
      <div className='outerWatchlistDiv2'>
        {watchlist.map((item,index) => {
          return (
            <div key={item.id} className='innerWatchlistDiv2' onMouseOver={() => handleMouseOver(item.id, index)} onMouseOut={handleMouseOut}>
              <div className='innerMostWatchlistDiv1'>
                <p style={item.isDown ? { color: "#DF4949" } : { color: "#67C988" }}>{item.name}</p>
              </div>
              <div className='innerMostWatchlistDiv2'>
                <p className='innerMostWatchlistPara1'>{item.percent}</p>
                <p className='innerMostWatchlistPara2' style={item.isDown ? {color: "#DF4949"} : {color: "#67C988"}}>{item.isDown ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</p>
                <p className='innerMostWatchlistPara3' style={item.isDown ? {color: "#DF4949"} : {color: "#67C988"}}>{item.price}</p>
              </div>
              <div className='innerMostWatchlistDiv3' style={isHovering ? {} : {display: "none"}}>
                <button style={{backgroundColor: "#0070ff", color: "white"}}><a data-tooltip-id="my-tooltip-1" data-tooltip-content="Buy (B)">Buy</a></button>
                <button style={{backgroundColor: "#ff4600", color: "white"}}><a data-tooltip-id="my-tooltip-1" data-tooltip-content="Sell (S)">Sell</a></button>
                <button style={{backgroundColor: "white", color: "gray", border: "0.5px solid gray"}}><a data-tooltip-id="my-tooltip-2" data-tooltip-content="Analytics (A)"><BarChartIcon /></a></button>
                <button style={{backgroundColor: "white", color: "gray", border: "0.5px solid gray"}}><a data-tooltip-id="my-tooltip-1" data-tooltip-content="More"><MoreHorizIcon /></a></button>
                <Tooltip id="my-tooltip-1" style={{height: "0.25rem", display: "flex", alignItems: "center", width: "2.2rem", fontSize: "0.7rem", backgroundColor: "gray", textAlign: "center"}}/>
                <Tooltip id='my-tooltip-2' style={{height: "0.25rem", display: "flex", alignItems: "center", width: "4rem", fontSize: "0.7rem", backgroundColor: "gray", textAlign: "center"}}/> 
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Watchlist
