// import React, { useContext } from "react";
// import classes from "./header.module.css"
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { BiCart } from "react-icons/bi";
// import LowerHeader from "./LowerHeader";
// import {Link} from "react-router-dom"
// import  DataContext  from "../DataProvider/DataContext";

// const Header = () => {
//  const {state, _dispatch} = useContext(DataContext)
// console.log(state.basket.length)
//   return (
//     <>
//       <section>
//         <div className={classes.header__container}>
//           <div className={classes.logo__container}>
//             <Link to="/">
//               <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
//             </Link>
//             <span>
//               <SlLocationPin />
//             </span>
//             <div className={classes.delivery}>
//               <p>Delivered to</p>
//               <span>Ethiopia</span>
//             </div>
//           </div>
//           <div className={classes.search}>
//             <select name="" id="">
//               <option value="">All</option>
//             </select>
//             <input type="text" />
//             <BsSearch size={25} />
//           </div>
//           <div className={classes.order__container}>
//             <Link to="" className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png
// "
//                 alt=""
//               />
//               <select name="" id="">
//                 <option value="">EN</option>
//               </select>
//             </Link>
//             <Link to="">
//               <div>
//                 <p>Sign In</p>
//                 <span>Account & Lists</span>
//               </div>
//             </Link>
//             <Link to="/orders">
//               <p>returns</p>
//               <span>& Orders</span>
//             </Link>
//             <Link to="/cart" className={classes.cart}>
//               <BiCart size={35} />
//               <span>{state.basket.length}</span>
//             </Link>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </>
//   );
// };

// export default Header;

// // import React, { useContext } from "react";
// // import classes from "./header.module.css";
// // import { SlLocationPin } from "react-icons/sl";
// // import { BsSearch } from "react-icons/bs";
// // import { BiCart } from "react-icons/bi";
// // import LowerHeader from "./LowerHeader";
// // import { Link } from "react-router-dom";
// // import DataContext from "../DataProvider/DataContext";

// // const Header = () => {
// //   const { state } = useContext(DataContext); // only destructure what you need

// //   return (
// //     <section className={classes.fixed}>
// //       <section>
// //         <div className={classes.header__container}>
// //           <div className={classes.logo__container}>
// //             <Link to="/">
// //               <img
// //                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
// //                 alt="Logo"
// //               />
// //             </Link>
// //             <span>
// //               <SlLocationPin />
// //             </span>
// //             <div className={classes.delivery}>
// //               <p>Delivered to</p>
// //               <span>Ethiopia</span>
// //             </div>
// //           </div>

// //           <div className={classes.search}>
// //             <select>
// //               <option value="">All</option>
// //             </select>
// //             <input type="text" />
// //             <BsSearch size={25} />
// //           </div>

// //           <div className={classes.order__container}>
// //             <Link to="" className={classes.language}>
// //               <img
// //                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
// //                 alt=""
// //               />
// //               <select>
// //                 <option value="">EN</option>
// //               </select>
// //             </Link>

// //             <Link to="">
// //               <div>
// //                 <p>Sign In</p>
// //                 <span>Account & Lists</span>
// //               </div>
// //             </Link>

// //             <Link to="/orders">
// //               <p>Returns</p>
// //               <span>& Orders</span>
// //             </Link>

// //             <Link to="/cart" className={classes.cart}>
// //               <BiCart size={35} />
// //               <span>{state?.basket?.length || 0}</span>
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       <LowerHeader />
// //     </section>
// //   );
// // };

// // export default Header;
import React, { useContext } from "react";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import DataContext from "../DataProvider/DataContext";

const Header = () => {
  const { state } = useContext(DataContext);

  return (
    <header className={classes.fixed}>
      {/* Top Header */}
      <div className={classes.header__container}>
        <div className={classes.logo__container}>
          <Link to="/">
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
              alt="Lang"
            />
            <select>
              <option value="">EN</option>
            </select>
          </Link>

          <Link to="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>

          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{state?.basket?.length || 0}</span>
          </Link>
        </div>
      </div>

      {/* Lower Header */}
      <LowerHeader />
    </header>
  );
};

export default Header;
