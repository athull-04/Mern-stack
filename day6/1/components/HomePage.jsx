// src/components/HomePage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './home.css'; // Import CSS for styling

const products = [
    { id: 1, name: 'S24 ULTRA', price: 115000, image: 'https://www.zdnet.com/a/img/resize/59d9448270bdf9642e4f5f6f323d2a1e94361c3d/2024/02/02/1bfa7d30-112c-4906-83a7-ce12551b7b16/galaxy-s24-ultra.jpg?auto=webp&fit=crop&height=1200&width=1200' },
    { id: 2, name: 'IPHONE 16', price: 79000, image: 'https://lh4.googleusercontent.com/proxy/BgBPDS5OqzIhKd79SSFZXCu4TPrN-uuDYlInnAR16A1AuKhGwJax78m5VLMy1rHdk2lt4MBAJpPtECWIu-YxIM9tsmkup-fTAP6z5opI-FKk7sokHnx283BT6p1XzlPf2TocjjV1i4n03YmVNMCAxoDhpxw6gg' },
    { id: 3, name: 'VIVO X100', price: 80000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62dZV2Ie-qG7OlP1g5Su2cIOpd08m80soSg&s' },
    { id: 4, name: 'XIOMI 14', price: 75000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIn2QS4D3uAAgF3mGzATVdQjPX2bsQktXzw&s' },
];

const HomePage = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        localStorage.setItem('cartItems', JSON.stringify([...cartItems, product])); // Save to local storage
    };

    return (
        <div className="homepage">
            <h1 className="homepage-title">Latest Products</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">₹{product.price.toLocaleString()}</p>
                        <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
                        <Link to={`/product/${product.id}`} className="view-details">View Details</Link> {/* View Details button */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
