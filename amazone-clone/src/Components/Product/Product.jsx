import  { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Product/ProductCard";
import classes from "./product.module.css";
import Loader from "../Loader/Loader";


const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {products.map((singleProduct) => (
            <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      )}
    </>
  );
};
export default Product;
