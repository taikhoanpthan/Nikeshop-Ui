import React from 'react'
import '../Newletter/sass/Newletter.css';
export const Newletter = () => {
  return (
    <div className='Newletter'>
        <h1>Get Exclusive Ofeers Your Email</h1>
        <p>Subcribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Enter Your Email...' />
            <button>Subscribe</button>
        </div>
    </div>  
  )
}
