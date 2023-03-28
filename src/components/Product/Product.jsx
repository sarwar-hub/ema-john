import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => { // props containing key, info, addToCartFunction
    const {img, name, price, seller, ratings} = props.product; // here, destructured only product
    const addToCartFunction = props.addToCartFunction;

    return (
        <div className='product'>
            <div className="product-data">    
                <img src={img} alt="product-thumbnail" />
                <h4>{name}</h4>
                <h5>Price ${price}</h5>
                <p>Sellar - {seller}</p>
                <p>Ratting - {ratings}.0</p>
            </div>
            <button onClick={()=>addToCartFunction(props.product)} className='add-to-cart-btn'>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Product;