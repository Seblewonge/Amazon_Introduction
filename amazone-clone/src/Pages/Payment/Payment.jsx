import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./payment.module.css";
import DataContext from "../../Components/DataProvider/DataContext";

export const Payment = () => {
 const { state, _dispatch } = useContext(DataContext);
 const { basket } = state;
const totalItem = basket?.reduce((amount, item) => {
  return item.amount + amount;
}, 0);
  return (
    <Layout>
      {/* header */}
      <div className={classes.payment_header}>Checkout({totalItem}) items</div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* addres */}
        <div></div>

        <hr />
        {/* product */}
        <div></div>
        <hr />

        {/* card form */}
      </section>
    </Layout>
  );
};
export default Payment;
