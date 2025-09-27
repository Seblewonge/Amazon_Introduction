import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { db } from "../../Utility/firebase";
import DataContext from "../../Components/DataProvider/DataContext";
import classes from "./orders.module.css";
import ProductCard from "../../Components/Product/ProductCard";

const Orders = () => {
  const { state } = useContext(DataContext);
  const { user } = state;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <Layout>
      {/* <div style={{ paddingTop: "110px" }}>Orders</div> */}
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
{
orders?.length == 0 && <div style={{padding:"20px"}}>youn don't have orders yet.</div>
}
          <div>
            {orders?.map((eachOrder) => {
              return (
                <div>
                  <hr />
                  <p>Order Id: {eachOrder?.id}</p>
                  {eachOrder?.data.basket?.map((order) => (
                    <ProductCard flex={true} product={order} key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
