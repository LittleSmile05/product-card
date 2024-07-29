import React, { useState } from 'react';
import './ProductCard.css'; // We'll create this CSS file later

import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';
import ProductDescription from './ProductDescription';

const ProductCard = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="product-card">
      <div className="product-card-content">
        <ProductImages />
        <ProductDetails />
      </div>
      <ProductDescription activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default ProductCard;