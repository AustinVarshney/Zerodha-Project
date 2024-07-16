import React from 'react'
import "./Position.css"
import { positions } from '../assets/assets'

const Position = () => {
  return (
    <div className='outerPositionDiv'>
      <p>Positions ({positions.length})</p>
      <table className='position'>
        <thead>
          <tr>
            <th className='th1'>Product</th>
            <th className='th2'>Instrument</th>
            <th className='th3'>Qty.</th>
            <th className='th4'>Avg.</th>
            <th className='th5'>LTP</th>
            <th className='th6'>P&L</th>
            <th className='th7'>Chg.</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((stock, index)=> {
              return (
                <tr key={index}>
                  <td className='td1'><div>{stock.product}</div></td>
                  <td className='td2'>{stock.name}</td>
                  <td className='td3'>{stock.qty}</td>
                  <td className='td4'>{stock.avg.toFixed(2)}</td>
                  <td className='td5'>{stock.price.toFixed(2)}</td>
                  <td className='td6' style={(stock.price*stock.qty - stock.avg * stock.qty)[0] == "+" ? {color: "#67C988"} : {color: "#DF4949"}}>{(stock.price*stock.qty - stock.avg * stock.qty).toFixed(2)}</td>
                  <td className='td7' style={stock.day[0] == "+" ? {color: "#67C988"} : {color: "#DF4949"}}>{stock.day}</td>
                </tr>
              )
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='td5'>Total</td>
            <td className='td6'>49.94</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Position
