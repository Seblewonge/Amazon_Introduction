// import { Carousel } from 'react-responsive-carousel'
import { useContext, useEffect } from "react";
import "./App.css";
// import Header from './Components/Header/Header'
// import  MyCarousel  from './Components/Carousel/MyCarousel'
// import Catagory from './Components/Catagory/Catagory'
// import Product from './Components/Product/Product'
import Routing from "./Router.jsx";
import DataContext from "./Components/DataProvider/DataContext.jsx";
import { Type } from "./Utility/actiontype.js";
import { auth } from "./Utility/firebase.js";
function App() {
  const { _user, dispatch } = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
