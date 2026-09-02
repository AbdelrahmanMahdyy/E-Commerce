import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProductDetails.css";
import SliderProduct from "../../components/slideproduct/SlideProduct";
import { categoryDescriptions } from "../Home/Home";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../components/slideproduct/SlideProductLoading";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

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

  const handleImgClick = (img) => {
    document.getElementById("big_img").src = img;
  };
  if (!product) return <p>Product Not Found</p>;

  return (
    <div>
      {loading ? (
        <ProductDetailsLoading />
      ) : (
        <div className="item_details">
          <div className="container">
            <ProductImages product={product} handleImgClick={handleImgClick} />
            <ProductInfo product={product} />
          </div>
        </div>
      )}

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
