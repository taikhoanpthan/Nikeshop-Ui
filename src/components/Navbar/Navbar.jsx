import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Navbar/sass/Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalcart} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOP<span>MY</span></p>
        </div>
        <ul className="nav-menu" >
          <li onClick={() => { setMenu("shop") }}>
            <Link style={{textDecoration:'none',color: 'black'}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("mens") }}>
            <Link style={{textDecoration:'none',color: 'black'}} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("womens") }}>
            <Link style={{textDecoration:'none',color: 'black'}} to="/womens">Women</Link>{menu === "womens" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("kids") }}>
            <Link style={{textDecoration:'none',color: 'black'}} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalcart()}</div>
        </div>
    </div>
  );
};
