import {Carousel} from 'react-responsive-carousel'
import {img} from '../../assets/img/data'
 import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css'

const MyCarousel = () => {
  return (
    <div className={classes.body}>
      <Carousel
autoPlay={true}
infiniteLoop = {true}
showIndicators ={false}
showThumbs = {false}
>
{
img.map((imageItem)=>{
return <img key={imageItem} src={imageItem}/>

})
}
</Carousel>
<div className={classes.hero__img}></div>
    </div>
  )
}

export default MyCarousel
