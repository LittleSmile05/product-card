import React from 'react';

const ProductDescription = ({ activeTab, setActiveTab }) => {
  return (
    <div className="under">
      <div className="tabs">
        <h2
          className={`underline ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </h2>
        <h2
          className={`reviews ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (0)
        </h2>
        <div className={`underline-container ${activeTab === 'reviews' ? 'active-reviews' : 'active-description'}`} />
      </div>
      {activeTab === 'description' ? (
        <div className="product-description active">
          <p className="product-description-text">
            iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email.
          </p>
        </div>
      ) : (
        <div className="product-reviews active">
          <div className="rating-container">
            <div className="rating-title">Rating</div>
            <div className="rating-dropdown">All <img src="./assets/arrow.png" alt="" /></div>
          </div>

          <label htmlFor="email">Write a review</label>
          <input type="email" id="email" name="email" placeholder="Email" />
          <input type="text" name="review" placeholder="Add your review..." />

          <div className="rating-stars">
            <label htmlFor="rating">Rating:</label>
            <div className="rating">
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img key={star} src="./assets/image.png" alt="" />
                ))}
              </div>
            </div>
          </div>

          <button type="submit">Send</button>

          <div className="comment-separator" />
          
          <div className="example-comment">
            <div className="f-line">
              <p className="user">manzar.hasanzadeh@gmail.com</p>
              <p className="date">Dec 12 2024</p>
            </div>
            <img className="comment-stars" src="./assets/stars.png" alt="" />
            <p className="comment-content">I liked it, super nice and worth its price</p>
            <div className="l-line">
              <div className="likes">
                <img src="./assets/hand-like.png" alt="" className="hand-like" />
                <p className="like-count">16</p>
              </div>
              <p className="reply">Reply</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;