import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt, FaCartArrowDown, FaRegHeart, FaShare   } from "react-icons/fa";


function Product() {
  return (
    <div className='product'>
      <div className="img_product">
        <img src="https://cdn.dummyjson.com/product-images/smartphones/iphone-x/1.webp" alt="" />
      </div>
      <p className="name_product">iphone X</p>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <p className='price'><span>$ 1000</span></p>
      <div className="icons">
        <span><FaCartArrowDown /></span>
        <span><FaRegHeart /></span>
        <span><FaShare  /></span>
      </div>
    </div>
  )
}

export default Product
