// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CartPage from './components/Cart'; // Ensure you have this component
import ErrorPage from './components/Error'; // Ensure you have this component
import ProductDetailPage from './components/ProductDetailPage';

const App = () => {
    return (
        <Router>
            <Header /> {/* Include the Header for navigation */}
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/products" element={<ProductDetailPage/>} /> 
                    <Route path="*" element={<ErrorPage />} /> {/* Fallback for invalid URLs */}
                </Routes>
            </main>
        </Router>
    );
};

export default App;
