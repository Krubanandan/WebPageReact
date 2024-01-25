import React from 'react'
import './SerR.css'

export default function Service() {
  return (
      <div>
        <div className='SerR'>
            <div className='SerV'>
              Placement Status
              <button className='Details'>For More Details</button>
            </div>
            <div className='SerV'>
              Faculty Details
              <button className='Details'>For More Details</button>
            </div>
            <div className='SerV'>Principal<button className='Details'>For More Details</button></div>
            <div className='SerV'>Student Portal<button className='Details'>For More Details</button></div>
            <div className='SerV'>Faculty Portal<button className='Details'>For More Details</button></div>
            <div className='SerV'>Fees Payment<button className='Details'>For More Details</button></div>
        
        
        </div>
        <br></br>
        <div className='image'>
        <img src='college.jpg' alt='leo'></img>
        </div>

      </div>
      
  )
}
