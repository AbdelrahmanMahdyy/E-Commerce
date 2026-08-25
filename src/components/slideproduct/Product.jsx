import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt, FaCartArrowDown, FaRegHeart, FaShare   } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Product({item}) {

  
  return (
    <div className='product'>
      <Link to={`/products/${item.id}`}>
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
      </Link>
      <div className="icons">
        <span><FaCartArrowDown /></span>
        <span><FaRegHeart /></span>
        <span><FaShare  /></span>
      </div>
    </div>
  )
}

export default Product
