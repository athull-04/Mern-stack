// src/components/CartPage.jsx

import React, { useEffect, useState } from 'react';
import './cart.css'; // Import CSS for styling

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedItems);
    }, []);

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-price">₹{item.price.toLocaleString()}</span>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="cart-total">
                    <h2>Total: ₹{totalPrice.toLocaleString()}</h2>
                </div>
            )}
            <button className="checkout-button" disabled={cartItems.length === 0}>Checkout</button>
        </div>
    );
};

export default CartPage;
