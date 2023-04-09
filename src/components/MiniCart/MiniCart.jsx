import React from 'react';
import './MiniCart.css';

const MiniCart = (props) => { // props always an object
    const {savedProducts, clearCart, children} = props; // cartProduct is an element of 'props' object and itself is an array of object

   let totalPrice = 0;
   let totalShipping = 0;
   let totalItems = 0;
   for (const product of savedProducts) {
        product.quantity = product.quantity || 1;
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
        totalItems += product.quantity;
        
   }
   let totalTax = totalPrice*0.1;
   let grandTotal = totalPrice+totalShipping+totalTax;

    return (
        <div className='cart'>
            <div className='cart-head'>
            <h4 className='cart-title'>Total <span className='count'>{totalItems}</span> items</h4>
            <span onClick={clearCart} className='clear-cart'>Clear Cart</span>
            </div>
            <hr />
            <div className="details">
                <p><span>Total Price</span>  <span>${totalPrice}</span></p>
                <p><span>Total Shipping</span>  <span>${totalShipping}</span></p>
                <p><span>Total Tax</span>  <span>${totalTax.toFixed(2)}</span></p>
                <p><span>Grand Total</span>  <span>${grandTotal.toFixed(2)}</span></p>
                {children}
            </div>
        </div>
    );
};

export default MiniCart;