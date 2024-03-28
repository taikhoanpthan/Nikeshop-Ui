import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

export const CartItems = () => {
    const {getTotal, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartItems'>
            <div className="cartItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (e && cartItems[e.id] > 0) { // Kiểm tra e tồn tại trước khi truy cập e.id
                    return (
                        <div key={e.id}>
                            <div className="cartItems-format cartItems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='cart-item-remove' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                } else {
                    return null; // Hoặc thay bằng phần tử trống <></>
                }
            })}
            <div className="cartItem-down">
                <div className="cartItem-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-item-total-item">
                            <p>Subtotal</p>
                            <p>${getTotal()}</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <p>Shipping free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <h3>Total</h3>
                            <h3>${getTotal()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promo">
                    <p>If you heve a couple, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Enter Promo Code...' />
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
