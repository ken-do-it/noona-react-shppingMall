import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className='product-card-container'>
      <img src={item?.img} alt={item?.title} />
      <div>{item?.choice === true ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
