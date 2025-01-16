import React, { useState } from 'react'
import { removeItem, decreaseItemQuantity, increaseItemQuantity } from '../features/cart/cartSlice.js';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const CartCard = ({ cardData }) => {
  // console.log(cardData);
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(cardData.id))
  }


  const handleDecrease = ()=>{
    
    dispatch(decreaseItemQuantity(cardData.id))
  }
  const handleIncrease = ()=>{
    dispatch(increaseItemQuantity(cardData.id))
  }
  

  return (
    <>
   
      <div className='flex w-[100%] mt-5  items-center justify-around py-6 shadow-3xl'>

      <Link to={`/allproducts/${cardData.id}`} className=' w-[5%] flex items-center  gap-1'>
        <img className=' w-[100%]' src={cardData.image} alt={cardData.name} />
        <h1 className=' text-xs'>{cardData.name.slice(1, 19)}...</h1>
      </Link>
      <h1 className=''>₹{cardData.currentPrice}</h1>
      <div className="flex items-center border w-20 h-10 rounded-md justify-between px-2">
        <button
          onClick={handleDecrease}
          className="text-gray-500 focus:outline-none"
          >
          {"<"}
        </button>
        <h1 className="text-xl font-medium">{cardData.quantity}</h1>
        <button
          onClick={handleIncrease}
          className="text-gray-500 focus:outline-none"
          >
          {">"}
        </button>
      </div>
      <h1 className=''>${cardData.currentPrice * cardData.quantity}</h1>
      <button onClick={handleRemoveItem} className=' hover:bg-red-600 bg-red-500 text-white  px-5 rounded-sm py-2 ' >Remove</button>
    </div>
         
      </>
  )
}

export default CartCard