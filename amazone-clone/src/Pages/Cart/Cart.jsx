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
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import classes from './cart.module.css'

const Cart = () => {
  const { state } = useContext(DataContext); // ✅ object destructuring
  const { basket } = state;
const total = basket.reduce((amount,item)=>{
 return item.price * item.amount + amount
},0)

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
            basket.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                renderDesc={true}
                flex={true}
              />
            ))
          )}
        </div>
{basket?.length !==0 &&(
<div className={classes.subtotal}>
<div>
<p>Subtotal ({basket?.length} items)</p>
<CurrencyFormat amount = {total}/>
</div>
<span>
<input type="checkbox" />
<small>This order contains a gift</small>
</span>
<Link to ="/payments"> Continue to checkout</Link>
</div>
)}
      </section>
    </Layout>
  );
};

export default Cart;
