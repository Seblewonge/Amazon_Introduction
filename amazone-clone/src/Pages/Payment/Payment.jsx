// import { useContext, useState } from "react";
// import Layout from "../../Components/Layout/Layout";
// import classes from "./payment.module.css";
// import DataContext from "../../Components/DataProvider/DataContext";
// import ProductCard from "../../Components/Product/ProductCard";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
// import { axiosInstance } from "../../API/axios";

// export const Payment = () => {
//   const { state, _dispatch } = useContext(DataContext);
//   const { user, basket } = state;

//   const totalItem = basket?.reduce((amount, item) => {
//     return item.amount + amount;
//   }, 0);
//   const total = basket.reduce((amount, item) => {
//     return item.price * item.amount + amount;
//   }, 0);

//   const [cardError, setCardError] = useState(null);
//   const stripe = useStripe();

//   const elements = useElements();

//   const handelChange = (e) => {
//     console.log(e);
//     e.error?.message ? setCardError(e?.error?.message) : setCardError("");
//   };
//   const handlePayment = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axiosInstance({
//         method: "POST",
//         url: `/payment/create?total= ${total * 100}`,
//       });
//       console.log(response.data);
//       const clientSecret = response.data?.clientSecret;

//       const confirmation = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement)

//         },

//       },

// );
//console.log(confirmation);
//     } catch (error) {
//       console.log(error.message);
//     }
//     //backend||function-----> contact to the clieent secret
//   };
//   return (
//     <Layout>
//       {/* header */}
//       <div className={classes.payment_header}>Checkout({totalItem}) items</div>
//       {/* payment method */}
//       <section className={classes.payment}>
//         {/* addres */}
//         <div className={classes.flex}>
//           <h3>Delivery Addres</h3>
//           <div>
//             <div>{user?.email}</div>
//             <div>123 REact Lane</div>
//             <div>Chicago, IL</div>
//           </div>
//         </div>

//         <hr />
//         {/* product */}
//         <div className={classes.flex}>
//           <h3>Review items and delivery</h3>
//           <div>
//             {basket?.map((item) => (
//               <ProductCard product={item} flex={true} />
//             ))}
//           </div>
//         </div>
//         <hr />

//         {/* card form */}
//         <div className={classes.flex}>
//           <h3>Payment methode</h3>
//           <div className={classes.payment_card_container}>
//             <div className={classes.payment_details}>
//               <form onSubmit={handlePayment}>
//                 {cardError && (
//                   <small style={{ color: "red" }}>{cardError}</small>
//                 )}
//                 <CardElement onChange={handelChange} />
//                 <div className={classes.payment_price}>
//                   <div>
//                     {" "}
//                     <span style={{ display: "flex", gap: "10px" }}>
//                       <p> Total Order | </p>
//                       <CurrencyFormat amount={total} />
//                     </span>
//                   </div>
//                   <button type="submit">Pay Now</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };
// export default Payment;

import { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./payment.module.css";
import DataContext from "../../Components/DataProvider/DataContext";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../API/axios";
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const { state } = useContext(DataContext);
  const { user, basket } = state;

  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  //const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate()

  const handelChange = (e) => {
    e.error?.message ? setCardError(e.error.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    //setProcessing(true);

    try {
      setProcessing(true);
      // 1. Create payment intent
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`, // total in cents
      });

      const clientSecret = response.data?.clientSecret;

      // 2. Confirm card payment
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(paymentIntent);

      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc("paymentIntent".id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      setProcessing(false);
      navigate("/orders",{state:{msg:"you have placed new Orders"}})

    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

  return (
    <Layout>
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>
      <section className={classes.payment}>
        {/* Address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />

        {/* Products */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* Card form */}
        <div className={classes.flex}>
          <h3>Payment method</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handelChange} />
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p> Total Order | </p>
                      <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="grey" size={12} />
                        <p>please wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
