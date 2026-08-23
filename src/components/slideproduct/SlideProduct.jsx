import React from 'react'

import "./SlideProduct.css"
import Product from './Product'

function SliderProduct() {
  return (
    <div className='slide_product'>
      <div className="container">
        <div className="top_slide">
          <h2>Cell Phones</h2>
          <p>Add bestselling product to weekly line up</p>
        </div>
        <Product />
      </div>
    </div>
  )
}

export default SliderProduct
