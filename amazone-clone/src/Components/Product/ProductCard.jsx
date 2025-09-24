// // import { Rating } from "@mui/material";
// // import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// // import classes from './product.module.css'
// // import { Link } from "react-router-dom";

// // const ProductCard = ( {product}) => {
// // const {image, title,id, rate, price} = product;
// //   return (
// //     <div className={`${classes.card_container}`}>
// //       <Link to={`/products/${id}`}>
// //         <img src={image} alt="" />
// //       </Link>
// //       <div>
// //         <h3>{title}</h3>
// //         <div className={classes.rating}>
// //           {/* rating */}
// //           <Rating value={rate} precision={0.5} />
// //           {/* count */}
// //           <small>{rate.count}</small>
// //         </div>
// //         <div>
// //           {/* price */}
// //           <CurrencyFormat amount={price} />
// //         </div>
// //         <button className={classes.button}> add to cart</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;
// import { Rating } from "@mui/material";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./product.module.css";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import DataContext  from "../DataProvider/DataContext";
// import { Type } from "../../Utility/actiontype";
// const ProductCard = ({ product, flex, renderDesc }) => {
//  const { image, title, id, price, description } = product;
//  const [_state, dispatch] = useContext(DataContext);

//   if (!product) return null;

 
// const addToCart =()=>{
// dispatch({
// type: Type.ADD_TO_BASKET,
// item:{image, title, id, price, description},
// });
// };
//   // safely get rating values
//   const rate = product?.rating?.rate ?? 0;
//   const count = product?.rating?.count ?? 0;

//   return (
//     <div
//       className={`${classes.card_container} ${
//         flex ? classes.product_flexed : ""
//       }`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt="" className={classes.img_container} />
//       </Link>
//       <div>
//         <h3>{title}</h3>
// {renderDesc &&<div style={{maxWidth:"750px"}}>{description}</div>}
//         <div className={classes.rating}>
//           <Rating value={rate} precision={0.5} readOnly />
//           <small>({count})</small>
//         </div>
//         <div>
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className={classes.button} onClick={addToCart}>Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../DataProvider/DataContext";
import { Type } from "../../Utility/actiontype";

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  const { dispatch } = useContext(DataContext);
  if (!product) return null;

  const { image, title, id, price, description, rating} = product;


  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, price, description,rating },
    });
  };

  const rate = product?.rating?.rate ?? 0;
  const count = product?.rating?.count ?? 0;

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h5>{title}</h5>
        {renderDesc && <div style={{ maxWidth: "650px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rate} precision={0.5} readOnly />
          <small>({count})</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
{
renderAdd &&  <button className={classes.button} onClick={addToCart}>
          Add to Cart
        </button>
}

       
      </div>
    </div>
  );
};

export default ProductCard;
