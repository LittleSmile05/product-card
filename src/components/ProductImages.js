import React, { useState } from 'react';

const ProductImages = () => {
  const [mainImage, setMainImage] = useState('./assets/big.png');

  const changeImage = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <>
      <div className="thumbnails">
        <div className={`sm ${mainImage === './assets/big.png' ? 'green' : 'gray'}`}>
          <img
            className="small"
            src="./assets/small.png"
            alt="Product Thumbnail 1"
            onClick={() => changeImage('./assets/big.png')}
          />
        </div>
        <div className={`sm ${mainImage === './assets/small.png' ? 'green' : 'gray'}`}>
          <img
            className="small"
            src="./assets/small.png"
            alt="Product Thumbnail 2"
            onClick={() => changeImage('./assets/small.png')}
          />
        </div>
        <div className="sm gray">
          <img
            className="small"
            src="./assets/small.png"
            alt="Product Thumbnail 3"
            onClick={() => changeImage('./assets/small.png')}
          />
        </div>
      </div>
      <div className="main-image">
        <img id="mainImage" src={mainImage} alt="Main Product Image" />
      </div>
    </>
  );
};

export default ProductImages;