import React from 'react'
import './sass/LoginSign.css'

export const LoginSignup = () => {
  return (
    <div className='loginsigup'>
      <div className="loginsigup-container">
        <h1>Sign Up</h1>
        <div className="loginsigup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsigup-login'>
          Already have an account? <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms</p>
        </div>
      </div>
    </div>
  )
}
