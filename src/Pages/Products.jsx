import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../components/Breadcrum/Breadcrum';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { Descriptiobox } from '../components/DescriptionBox/Descriptiobox';
import { RelatedProduct } from '../components/RelatedProduct/RelatedProduct';

export const Products = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    
    // Check if productId is valid and all_product is an array
    const product = all_product && all_product.find((e) => e.id === Number(productId));

    // Render a message if product is not found
    if (!product) {
        return <div className='product'>Product not found</div>;
    }

    return (
        <div className='product'>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <Descriptiobox />
            <RelatedProduct/>
        </div>
    );
};
