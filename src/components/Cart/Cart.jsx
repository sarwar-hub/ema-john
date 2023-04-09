import React from 'react';
import './Cart.css';
import { useLoaderData } from 'react-router-dom';
import MiniCart from '../MiniCart/MiniCart';
import CartSingle from '../CartSingle/CartSingle';



const Cart = () => {
    const cartProducts = useLoaderData();
    
    return (
        <div className='main-cart'>
            <div>
                <h1>Cart Products {cartProducts.length}</h1>
                {
                    cartProducts.map(product=><CartSingle key={product.id} product={product}></CartSingle>)
                }
            </div>
            <div>
                <h1>Cart calculation</h1>
                <MiniCart cartProducts={cartProducts}></MiniCart>
            </div>
        </div>
    );
};

export default Cart;