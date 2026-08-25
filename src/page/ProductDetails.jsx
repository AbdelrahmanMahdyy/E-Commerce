import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const {id} = useParams()
  const [product, setProduct] = useState(null) 
  const [loading, setLoading] = useState(true) 

  useEffect(() =>{
    const fetchProduct = async () =>{
        try{
            const res = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    fetchProduct()
  }, [id] )

  if(loading) return <p>Loading ....</p>
  if(!product) return <p>Product Not Found</p>
  
  return (
    <div>
        <h2>{product.title}</h2>
    </div>
  )
}

export default ProductDetails
