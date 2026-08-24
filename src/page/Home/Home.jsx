import HeroSlider from '../../components/HeroSlider'
import React, { useEffect, useState } from 'react' ;
import './Home.css'
import SlideProduct from '../../components/slideproduct/SlideProduct';

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories"
]
const categoryDescriptions = {
  "smartphones": "Top-rated smartphones designed for performance and connection.",
  "mobile-accessories": "Must-have accessories to power up and protect your devices.",
  "laptops": "Powerful laptops built for work, creativity, and everything in between.",
  "tablets": "Sleek, portable tablets for browsing, streaming, and getting things done.",
  "sunglasses": "Stylish sunglasses that combine comfort with everyday protection.",
  "sports-accessories": "Gear up with accessories built for performance and active living."
}

function Home() {

  const [products, setProducts] = useState({})

  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    const fetchProducts = async () =>{
      try{
        const results = await Promise.all(
          categories.map( async (category) =>{
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            return {[category] : data.products}
          })
        )
        const productsData = Object.assign({}, ...results);
        setProducts(productsData)


      } catch (error) {
        console.error("Error Fetching", error)
      } finally {
        setLoading (false)
      }
    }
    fetchProducts()
  },[])

console.log(categories);

  return (
    <div>
      <HeroSlider />

      { loading ? (
        <p>Loading ....</p>
      ) : (
        categories.map((category) => (
        <SlideProduct key={category} data={products[category]} title={category.replace("-"," ")} describtion={categoryDescriptions[category]}/>
      )))}
    </div>
  )
}

export default Home
