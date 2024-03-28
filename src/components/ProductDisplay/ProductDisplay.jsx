import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State để kiểm soát việc hiển thị thông báo

    const handleAddToCart = (productId) => {
        addToCart(productId);
        setShowSuccessMessage(true); // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng thành công
        setTimeout(() => {
            setShowSuccessMessage(false); // Tắt thông báo sau một khoảng thời gian nhất định
        }, 2000); // Thời gian hiển thị thông báo (ở đây là 2 giây)
    };

    return (
        <div className='productDisplay'>
            {showSuccessMessage && <div className="successMessage">Add to cart successfully!</div>}
            <div className="productDisplay__left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className='productDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay__right">
                <h1>{product.name}</h1>
                <div className="productDisplay__right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productDisplay__right-price">
                    <div className="productDisplay__right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productDisplay__right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productDisplay__right-description">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nostrum dolorem alias
                    cumque quam rem, ea unde omnis tenetur labore ab aliquid explicabo laboriosam libero, illo vel veniam dignissimos incidunt nulla!
                </div>
                <div className="productDisplay__right-size">
                    <h1>Select Size</h1>
                    <div className="productDisplay__right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                </div>
                <button onClick={() => { handleAddToCart(product.id) }}>ADD TO CART</button>
                <p className='productDisplay__right-category'><span>Category : </span>Women, T-Shirt, Crop Top</p>
                <p className='productDisplay__right-category'><span>Tags : </span>Morden, Lastest</p>
            </div>
        </div>
    );
};
