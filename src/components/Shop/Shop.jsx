import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import MiniCart from '../MiniCart/MiniCart';
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

    const addToCart = (addedProduct) => {
        const updatedCart = [...cart, addedProduct];
        setCart(updatedCart);

        addToDb(addedProduct.id);
    }


    // get data from local storage to find matched(added) product and set them in cart state
    useEffect(()=>{
        // get array of object(product) from local storage
        const savedItemsID = getShoppingCart();
        // save products are pushed in this array after matching saved id and products id
        let cartProducts = [];
        // get id of product from saveItems
        for (const id in savedItemsID) {
            // find matched id product
            const savedProduct = products.find(product => product.id === id);
            if (savedProduct) {
                // set product quantity
                savedProduct.quantity = savedItemsID[id]; // value of id from local storage
                // push to cartProducts
                cartProducts.push(savedProduct);
            }
            
        }
        setCart(cartProducts);
    },[products])

    return (
        <div className='shop'>
            <div className="products">
                <h1>Shop </h1>
                <small>Showing {products.length} products</small>
                <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCartFunction={addToCart}></Product>)
                }
                </div>
            </div>
            
                <div className="cart-container">
                    <MiniCart cartProducts={cart}></MiniCart>
                </div>
            
        </div>
    );
};

export default Shop;