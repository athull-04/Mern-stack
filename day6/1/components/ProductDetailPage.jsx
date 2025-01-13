// src/components/ProductDetailPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import './productDetail.css'; // Import CSS for styling

const products = [
    { id: 1, name: 'S24 ULTRA', price: 115000, image: 'https://www.zdnet.com/a/img/resize/59d9448270bdf9642e4f5f6f323d2a1e94361c3d/2024/02/02/1bfa7d30-112c-4906-83a7-ce12551b7b16/galaxy-s24-ultra.jpg?auto=webp&fit=crop&height=1200&width=1200', description: 'The latest flagship smartphone with advanced features.' },
    { id: 2, name: 'IPHONE 16', price: 79000, image: 'https://lh4.googleusercontent.com/proxy/BgBPDS5OqzIhKd79SSFZXCu4TPrN-uuDYlInnAR16A1AuKhGwJax78m5VLMy1rHdk2lt4MBAJpPtECWIu-YxIM9tsmkup-fTAP6z5opI-FKk7sokHnx283BT6p1XzlPf2TocjjV1i4n03YmVNMCAxoDhpxw6gg', description: 'Apple\'s latest iPhone with cutting-edge technology.' },
    { id: 3, name: 'VIVO X100', price: 80000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62dZV2Ie-qG7OlP1g5Su2cIOpd08m80soSg&s', description: 'A high-performance smartphone with a stunning display.' },
    { id: 4, name: 'XIOMI 14', price: 75000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIn2QS4D3uAAgF3mGzATVdQjPX2bsQktXzw&s', description: 'An affordable smartphone packed with features.' },
];

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = products.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found.</div>;
    }

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${product.name} has been added to your cart!`);
    };

    return (
        <div className="product-detail-page">
            <img src={product.image} alt={product.name} className="product-image" />
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">Price: ₹{product.price.toLocaleString()}</p>
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetailPage;
