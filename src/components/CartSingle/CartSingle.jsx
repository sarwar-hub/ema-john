import React from 'react';
import { TrashIcon  } from '@heroicons/react/24/solid'
import './CartSingle.css';

const CartSingle = ({product}) => {
    const {name, price, shipping, img} = product;
    return (
        <div className='single-product'>
            <div className='single-image'><img src={img} alt="" /></div>
            <div className='single-data'>
                <div>
                    <h3>{name}</h3>
                    <p>Price: <span className='single-price'>${price}</span></p>
                    <p>Shipping: <span className='single-price'>${shipping}</span></p>
                </div>
                <div>
                    <TrashIcon className='trash-icon'></TrashIcon>
                </div>
            </div>
        </div>
    );
};

export default CartSingle;