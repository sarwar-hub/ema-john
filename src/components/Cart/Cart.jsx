import React, { useState } from 'react';
import './Cart.css';
import { Link, useLoaderData } from 'react-router-dom';
import MiniCart from '../MiniCart/MiniCart';
import CartSingle from '../CartSingle/CartSingle';
import { removeFromDb } from '../../utilities/fakedb';
import { deleteShoppingCart } from '../../utilities/fakedb';



const Cart = () => {
    const savedProducts = useLoaderData();
    const [cart, setCart] = useState(savedProducts);

    const handleDelete = (id) => {
        const itemsAfterDlete = cart.filter(product=>product.id !== id);
        setCart(itemsAfterDlete);
        removeFromDb(id);
    }
    

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='main-cart'>
            <div>
                <h1>Cart Products</h1>
                {
                    cart.map(product=><CartSingle key={product.id} product={product} handleDelete={handleDelete}></CartSingle>)
                    
                }
            </div>
            <div>
                <h1>Cart calculation</h1>
                <MiniCart savedProducts={cart} clearCart={clearCart}>
                    <Link to="/checkout"><button className='cart-bottom-button'>Cart Overview →</button></Link>
                </MiniCart>
            </div>
        </div>
    );
};

export default Cart;