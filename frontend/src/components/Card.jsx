import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice.js';

const Card = ({ card }) => {

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({item:card, quantity: 1}));
  };

  // console.log(card);


  return (
    <Link to={`/allproducts/${card.id}`} >
      <div className="flex flex-col  w-[270px]  ">
        <div
          className="flex   overflow-hidden flex-col gap-1  max-w-full rounded bg-neutral-100 "
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <div className='flex '>


            <div className=" text-xs whitespace-nowrap text-neutral-50">
              <div className=" w-14 mt-2 ml-2 self-start px-3 py-1 bg-red-500 rounded">

                -{card.discount}%
              </div>
              <img
                loading="lazy"
                src={card.image}
                alt={card.name}
                className="object-contain h-[172px] self-end mt-3 ml-12 max-w-full aspect-[1.13] w-[172px]"
              />
            </div>
            <div className="mt-2">
              <img
                loading="lazy"
                src="/image/FillHeart.png"
                alt="fillheart"
                className="object-contain aspect-square w-[34px]"
              />
              <img
                loading="lazy"
                src="/image/FillEye.png"
                alt="fill heart"
                className="object-contain mt-2 aspect-square w-[34px]"
              />
            </div>
          </div>
          <Link to="" className={`h-[40px] flex justify-center  items-center text-white w-[100%] bg-black  ${show ? "opacity-100" : "opacity-0"}`} onClick={handleAddToCart} >
            <img src="/image/Carticon.png" className='mr-3' alt="carticon" />Add to Cart</Link>
        </div>
        <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
          <div className="self-stretch text-black">{card.name}</div>
          <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
            <div className="text-red-500">₹{card.currentPrice}</div>
            <div className="text-black line-through opacity-50">₹{card.originalPrice}</div>
          </div>
          <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
            <img
              loading="lazy"
              src="/image/Fivestar.png"
              alt={`${card.rating} star rating`}
              className="object-contain shrink-0 aspect-[5] w-[100px]"
            />
            <div className="w-8 opacity-50">({card.reviews})</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card