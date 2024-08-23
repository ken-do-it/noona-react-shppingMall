import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  const showDetail =()=> {
    navigate (`/Products/${item.id}`)

  }

  return (
    <div className='product-card-container' onClick={showDetail}>
      <img src={item?.img} alt={item?.title} />
      <div>{item?.choice === true ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
