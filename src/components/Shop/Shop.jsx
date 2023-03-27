import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
   
    // state for cart
    const [cart, setCart] = useState([]);
    const addToCart = (clickedProduct) => {
        const updatedCart = [...cart, clickedProduct];
        setCart(updatedCart);
    }

    return (
        <div className='shop'>
            <div className="products">
                <h1>Shop</h1>
                <small>Showing {products.length} products</small>
                <div className="products-container">
                {
                    products.map(product => <Product key={product.id} info={product} addToCartFunction={addToCart}></Product>)
                }
                </div>
            </div>
            <div className="cart">
                <h3>Your cart({cart.length})</h3>
                <h5>{}</h5>

            </div>
        </div>
    );
};

export default Shop;