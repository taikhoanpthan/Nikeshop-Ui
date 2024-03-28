import React from 'react';
import '../Hero/sass/Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import background from '../Assets/background.png';

export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__left">
        <h1>Welcome to my store</h1>
        <div className="hero-hand-icon">
          <p>Have fun!!!</p>
          <img src={hand_icon} alt="" />
        </div>
        {/* <p>Thắng </p>
        <p>Thắng cái con c..</p> */}
        <div className='hero-lastest-btn'>
            <span>Shop Now</span>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero__right">
        <img src={background} alt="" />
      </div>
    </div>
  );
};
