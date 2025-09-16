import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import ProductCard from '../Product/ProductCard'
import classes from "./product.module.css";

const Product = () => {
const[products, setProducts] = useState([])
useEffect(()=>{
axios .get('https://fakestoreapi.com/products')
.then((res)=>{
setProducts(res.data)
}).catch((err)=>{
console.log(err)
})
}, [])
  return (
    <section className={classes.product_container}>
      {
        products.map((singleProduc) => (
          <ProductCard product={singleProduc} key={singleProduc.id} />
        ))
      }
    </section>
  );
}

export default Product
