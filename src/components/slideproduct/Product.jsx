import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt, FaCartArrowDown, FaRegHeart, FaShare   } from "react-icons/fa";


function Product({item}) {

  
  return (
    <div className='product'>
      <div className="img_product">
        <img src={item.images[0]} alt="" />
      </div>
      <p className="name_product">{item.title}</p>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <p className='price'><span>$ {item.price}</span></p>
      <div className="icons">
        <span><FaCartArrowDown /></span>
        <span><FaRegHeart /></span>
        <span><FaShare  /></span>
      </div>
    </div>
  )
}

export default Product
