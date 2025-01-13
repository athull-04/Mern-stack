// src/components/Header.jsx

import React from 'react';
import './Header.css'; // Optional: for additional styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">ShopEasy</div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
