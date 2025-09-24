// import React, { useContext } from 'react'
// import Layout from '../../Components/Layout/Layout';
// import DataContext from '../../Components/DataProvider/DataContext';
// import ProductCard from '../../Components/Product/ProductCard';

//  const Cart = () => {
// const[state, _user, _dispatch]= useContext(DataContext)
// const{basket} = state
//   return (
//     <Layout>
//       <section>
// <div>
// <h2>Hello</h2>
// <h3>Your shopping basket</h3>
// <hr />
// {
// basket?.length === 0 ?(<p>Opps ! No item in Your cart</p>):(
// basket?.map((item)=>{
// return <ProductCard
// key={1}
// product={item}
// renderDesc={true}
// flex={true}
// renderAdd={false}
// />
// })
// )
// }
// </div>
// <div></div>
// </section>
//     </Layout>
//   );
// }
// export default Cart;
import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import DataContext from "../../Components/DataProvider/DataContext";
import ProductCard from "../../Components/Product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import classes from "./cart.module.css";
import { Type } from "../../Utility/actiontype";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { basket } = state;
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });

  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart</p>
          ) : (
            basket.map((item, i) => {
              return (
                <section key={item.id || i} className={classes.cart_product}>
                  <ProductCard
                    // key={i}
                    product={item}
                    renderDesc={true}
                    flex={true}
                  />
                  <div className={classes.bnt_container}>
                    <button
                      className={classes.bnt}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.bnt}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments"> Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
