import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../API/endPoints';
import Product from '../../Components/Product/Product';
import ProductCard from '../../Components/Product/ProductCard';
import classes from './result.module.css'
import Loader from '../../Components/Loader/Loader';

export const Result = () => {
const [results, setResults] = useState([]);
const[isLoading, setisLoading] = useState(true)
const {catagoryName} = useParams()
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${catagoryName}`)
      .then((res) => {
        setResults(res.data.products || res.data || []);
setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
setResults([]);
setisLoading(false)
      });
  },[catagoryName]);
return (
  <Layout>
    <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Catagory /{catagoryName}</p>
      <hr />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.product_container}>
          {results?.map((Product) => (
            <ProductCard 
key={Product.id} 
product={Product}
renderDesc={false} 
renderAdd={true}
/>
          ))}
        </div>
      )}
    </section>
  </Layout>
);
};
export default Result;
