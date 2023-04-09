import React from 'react';
import './Cart.css';
import { useLoaderData } from 'react-router-dom';



const Cart = () => {
    const cartProducts = useLoaderData();
    const {name, price, quantuty} = cartProducts;
    return (
        <div className='main-cart'>
            <div>
                <h1>Cart Products {cartProducts.length}</h1>
            </div>
            <div>
                <h1>Cart calculation</h1>

            </div>
        </div>
    );
};

export default Cart;