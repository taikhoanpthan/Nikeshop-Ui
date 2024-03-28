import React from 'react'
import '../Offers/sass/Offers.css';
import JDGreen from '../Assets/JDGreen.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers__left">
            <h1>New Collections</h1>
            <h1>Air Jordan 1 Low</h1>
            <p style={{textDecoration:'line-through'}}>$1000</p>
            <p>$700</p>
            <button>Check now</button>
        </div>
        <div className="offers__right">
            <img src={JDGreen} alt="" />
        </div>
    </div>
  )
}
