import React from 'react';
import '../Item/sass/Item.css';
import '../Popular/sass/popular.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  return (
    <div className='item'>
       <Link to={`/products/${props.id}`}>
         <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
       </Link>
       <p>{props.name}</p>
       <div className="item__price">
           <div className="item__price-new">
               ${props.new_price}
           </div>
           <div className="item__price-old">
               ${props.old_price}
           </div>
       </div>
    </div>
  );
};
