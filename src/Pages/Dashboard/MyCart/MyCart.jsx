import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';

const MyCart = () => {
    const [cart] = useCart()
    console.log(cart)
    const totalPrice = cart.reduce((sum,item) => item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | MyCart</title>
            </Helmet>
            <h2>My Cart</h2>
            <h3>length : {cart.length}</h3>
            <h3>Price : {totalPrice}</h3>
        </div>
    );
};

export default MyCart;