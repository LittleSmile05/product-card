import React from 'react';

const ProductDetails = () => {
  return (
    <div className="product-details">
      <h1 className="product-title">Naturalive Tüm Saç Tipleri İçin Şampuan 500ml</h1>
      <div className="product-rating">
        <span>4.6</span>
        <span className="stars"><img src="./assets/stars.png" alt="Rating Stars" /></span>
        <span className="reviews">297 rating</span>
      </div>
      <p className="product-category">Category: Shampoos</p>
      <p className="product-stock-code">Stock Code: ADKR1235</p>
      <div className="product-actions">
        <p className="product-price">17 ₼</p>
        <button className="btn add-to-favorites">
          <img className="btn-img" src="./assets/like.png" alt="" /> Add to favorites
        </button>
      </div>
      <div className="product-add-to-cart">
        <input type="number" defaultValue="1" min="1" />
        <button className="btn add-to-cart">
          <img className="btn-img-store" src="./assets/store.png" alt="" /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;