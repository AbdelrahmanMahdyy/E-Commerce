import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaStarHalfAlt,
  FaCartArrowDown,
  FaRegHeart,
  FaShare,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

import "./ProductDetails.css";
import Product from "../../components/slideproduct/Product";
import SliderProduct from "../../components/slideproduct/SlideProduct";
import { categoryDescriptions } from "../Home/Home";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../components/slideproduct/SlideProductLoading";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [product?.category]);

  if (loading) return <ProductDetailsLoading />;
  if (!product) return <p>Product Not Found</p>;

  const handleImgClick = (img) => {
    document.getElementById("big_img").src = img;
  };

  return (
    <div>
      <div className="item_details">
        <div className="container">
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

          <div className="details_item">
            <h1 className="name">{product.title}</h1>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p className="price">$ {product.price}</p>

            <h5>
              Availability: <span>{product.availabilityStatus}</span>
            </h5>
            <h5>
              Brand: <span>{product.brand}</span>
            </h5>
            <p className="description">{product.description}</p>
            <h5 className="stock">
              <span>Hurry Up! Only {product.stock} Products left in stock</span>
            </h5>
            <button className="btn">
              Add to Cart <FaCartArrowDown />
            </button>
            <div className="icons">
              <span>
                <FaRegHeart />
              </span>
              <span>
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      </div>

      {loadingRelatedProducts ? (
        <SlideProductLoading />
      ) : (
        <SliderProduct
          data={relatedProducts}
          title={product.category.replace("_", " ")}
          key={product.category}
          describtion={categoryDescriptions[product.category]}
        />
      )}
    </div>
  );
}

export default ProductDetails;
