import { useContext } from "react";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import DataContext from "../DataProvider/DataContext";
import { auth } from "../../Utility/firebase";

const Header = () => {
  // const { state } = useContext(DataContext);
  const { state, _dispatch } = useContext(DataContext);
  const { user, basket } = state;
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  // const totalItem =
  //   state?.basket?.reduce((acc, item) => acc + item.amount, 0) || 0;
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <Link to={"/"}>
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Logo"
              />
            </Link>
            <span>
              <SlLocationPin />
            </span>
            <div className={classes.delivery}>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          <div className={classes.search}>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>

          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>

            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={()=>auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              {/* <span>{totalItem || 0}</span> */}
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>

      <LowerHeader />
    </section>
  );
};

export default Header;
