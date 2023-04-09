import React from 'react';
import { BeakerIcon, TrashIcon  } from '@heroicons/react/24/solid'
import './CartSingle.css';

const CartSingle = ({product}) => {
    const {name, price, shipping, img, quantity} = product;
    return (
        <div className='single-product'>
            <div><img className='single-image' src={img} alt="" /></div>
            <div className='single-data'>
                <div>
                    <h3>{name}</h3>
                    <p>Price: {price}</p>
                    <p>Shipping: {shipping}</p>
                </div>
                <div>
                    <TrashIcon></TrashIcon>
                </div>
            </div>
        </div>
    );
};

export default CartSingle;