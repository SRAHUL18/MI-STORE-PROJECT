import React from "react";
import "../styles/ProductReviewCard.css";


const ProductReviewCard = ({image,index,name,price,review}) => {
  return (<div className="ProductReviewCard">
    <img src={image} alt={`${index} Review`} />
    <h5>{review}</h5>
    <span>{name}</span>
    <b>{price}</b>
  </div>
)
};

export default ProductReviewCard;
