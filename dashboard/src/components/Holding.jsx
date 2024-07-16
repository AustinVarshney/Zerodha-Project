import React from 'react'
import "./Holding.css"
import {holdings} from "../../src/assets/assets.js"

const Holding = () => {
  return (
    <div className='outerHoldingDiv'>
      <p>Holdings ({holdings.length})</p>
      <table className='holding'>
        <thead>
          <tr>
            <th className='th1'>Instrument</th>
            <th className='th2'>Qty.</th>
            <th className='th3'>Avg. cost</th>
            <th className='th4'>LTP</th>
            <th className='th5'>Cur. value</th>
            <th className='th6'>P&L</th>
            <th className='th7'>Net chg.</th>
            <th className='th8'>Day chg.</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding, index) => (
              <tr key={index}>
                <td className='td1'>{holding.name}</td>
                <td className='td2'>{holding.qty}</td>
                <td className='td3'>{holding.avg.toFixed(2)}</td>
                <td className='td4'>{holding.price.toFixed(2)}</td>
                <td className='td5'>{holding.qty*holding.price.toFixed(2)}</td>
                <td className='td6' style={(holding.qty*holding.price - holding.avg*holding.qty).toFixed(2)>0 ? {color: "#67C988"} : {color: "#DF4949"}}>{(holding.qty*holding.price - holding.avg*holding.qty).toFixed(2)}</td>
                <td className='td7' style={holding.net[0] == "+" ? {color: "#67C988"} : {color: "#DF4949"}}>{holding.net}</td>
                <td className='td8' style={holding.day[0] == "+" ? {color: "#67C988"} : {color: "#DF4949"}}>{holding.day}</td>
              </tr>
          ))}
        </tbody>
      </table>
      <div className='innerHoldingDiv1'>
        <div className='innerMostHoldingDiv1'>
          <p>29,875<span>.55</span></p>
          <p>Total investment</p>
        </div>
        <div className='innerMostHoldingDiv2'>
          <p>31,428<span>.95</span></p>
          <p>Current value</p>
        </div>
        <div className='innerMostHoldingDiv3'>
          <p>1,553.40 <br /><span>(+5.20%)</span></p>
          <p>P&L</p>
        </div>
      </div>
    </div>
  )
}

export default Holding
