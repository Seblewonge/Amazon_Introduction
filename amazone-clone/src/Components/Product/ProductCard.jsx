import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from './product.module.css'

const ProductCard = ( {product}) => {
const {image, title, rating, price} = product;
  return (
    <div className={`${classes.card_container}`}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating} precision={0.5} />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <div>
{/* price */}
<CurrencyFormat amount={price}/>
</div>
<button className={classes.button}> add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
