import React from 'react'
import classes from "./catagory.module.css"

const CatagoryCard = ({data}) => {
  return (
    <div className={classes.catagory}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CatagoryCard
