
// import { Carousel } from 'react-responsive-carousel'
import './App.css'
import Header from './Components/Header/Header'
import  MyCarousel  from './Components/Carousel/MyCarousel' 
import Catagory from './Catagory/Catagory'
import Product from './Components/Product/Product'

function App() {
 

  return (
    <>
      
     <Header />  
<MyCarousel/>
<Catagory/>
<Product/>
    </>
  )
}

export default App
