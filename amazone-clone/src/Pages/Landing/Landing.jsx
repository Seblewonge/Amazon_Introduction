import React from 'react'
import Layout from '../../Components/Layout/Layout'
import MyCarousel from '../../Components/Carousel/MyCarousel'
import Catagory from '../../Components/Catagory/Catagory'
import Product from '../../Components/Product/Product'
export const Landing = () => {
  return (
    <Layout>
<MyCarousel/>
<Catagory/>
<Product/>
</Layout>
  )
}
export default Landing;
