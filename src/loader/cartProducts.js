import { getShoppingCart } from "../utilities/fakedb";

const cartProducts = async() => {
    try{
        const response = await fetch('products.json');
        const products = await response.json();
        
        // cart items from localstorage
        const cartItems = getShoppingCart()
        const cartProducts = [];
        for(const id in cartItems) {
            const cartProduct = products.find(product=> product.id === id)
            if(cartProduct) {
                const quantity = cartItems[id];
                cartProduct.quantity = quantity;

                cartProducts.push(cartProduct);
            }
        }
        
        return cartProducts;
    } catch(error) {
        console.log(error);
    }
}

export default cartProducts;
