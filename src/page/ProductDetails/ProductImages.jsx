import React from "react";

const ProductImages = ({ product, handleImgClick }) => {
  return (
    <div className="img_item">
      <div className="big_img">
        <img id="big_img" src={product.images[0]} alt={product.title} />
      </div>

      <div className="small_img">
        {product.images.map((img, index) => (
          <div key={index} className="all_small_images">
            <img
              onClick={() => handleImgClick(img)}
              key={index}
              src={img}
              alt={product.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
