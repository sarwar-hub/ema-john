import React from 'react';
import './Cart.css';

const Cart = (props) => { // props always an object
    const {cartProducts} = props; // cartProduct is an element of 'props' object and itself is an array of object

   let totalPrice = 0;
   let totalShipping = 0;
   
   for (const product of cartProducts) {
        totalPrice += product.price;
        totalShipping += product.shipping;
        console.log(product)
   }
   let totalTax = totalPrice*0.1;
   let grandTotal = totalPrice+totalShipping+totalTax;

    return (
        <div className='cart'>
            <h4 className='cart-title'>Total items {cartProducts.length}</h4>
            <hr />
            <div className="details">
                <p><span>Total Price</span>  <span>${totalPrice}</span></p>
                <p><span>Total Shipping</span>  <span>${totalShipping}</span></p>
                <p><span>Total Tax</span>  <span>${totalTax}</span></p>
                <p><span>Grand Total</span>  <span>${grandTotal}</span></p>
            </div>
        </div>
    );
};

export default Cart;