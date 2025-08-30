import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/cartSlice.js';
import { formatCurrency } from '../utils/formatters.js';
import { cardData as allProducts } from '../data/product.js'; 
import PropTypes from 'prop-types';

import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const CartCard = ({ cardData: itemFromCart }) => { 
  const dispatch = useDispatch();

  const productDetails = allProducts.find(p => p.id === itemFromCart.id);

  if (!productDetails) {
    return null; 
  }

  const displayData = {
    ...productDetails,
    quantity: itemFromCart.quantity,
  };

  const handleRemoveItem = () => dispatch(removeItem(displayData.id));
  const handleDecrease = () => {
    dispatch(updateQuantity({ id: displayData.id, quantity: displayData.quantity - 1 }));
  };
  const handleIncrease = () => {
    dispatch(updateQuantity({ id: displayData.id, quantity: displayData.quantity + 1 }));
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg">
      {/* Image Section */}
      <div className="relative aspect-square bg-gray-100 p-4">
        <Link to={`/allproducts/${displayData.id}`}>
          <img
            src={displayData.image}
            alt={displayData.name}
            className="h-full w-full object-contain object-center"
          />
        </Link>
        <button
          onClick={handleRemoveItem}
          className="absolute top-3 right-3 z-10 rounded-full bg-red-500 p-1.5 text-white shadow-md transition hover:bg-red-600"
          aria-label="Remove from cart"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Details Section */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
          <Link to={`/allproducts/${displayData.id}`}>{displayData.name}</Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Price: {formatCurrency(displayData.currentPrice)}
        </p>
        
        {/* --- UPDATED INTERACTIVE CONTROLS --- */}
        <div className="mt-auto pt-4">
            
            {/* Mobile and Tablet Quantity Selector (Visible on small/medium screens) */}
            <div className="flex w-full items-center rounded border border-gray-300 lg:hidden">
                <button
                    onClick={handleDecrease}
                    className="flex w-1/3 items-center justify-center p-2 text-gray-600 transition hover:bg-gray-100"
                    aria-label="Decrease quantity"
                >
                    <MinusIcon className="h-5 w-5" />
                </button>
                <span className="w-1/3 border-x p-2 text-center font-medium">{displayData.quantity}</span>
                <button
                    onClick={handleIncrease}
                    className="flex w-1/3 items-center justify-center p-2 text-gray-600 transition hover:bg-gray-100"
                    aria-label="Increase quantity"
                >
                    <PlusIcon className="h-5 w-5" />
                </button>
            </div>

            {/* Desktop Quantity Selector (Visible on large screens and up) */}
            <div className="hidden items-center justify-between lg:flex">
                <span className="font-semibold">Quantity</span>
                <div className="flex items-center rounded border border-gray-300">
                    <button
                        onClick={handleDecrease}
                        className="px-3 py-1 text-gray-600 transition hover:bg-gray-100"
                        aria-label="Decrease quantity"
                    >
                        <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-1 font-medium">{displayData.quantity}</span>
                    <button
                        onClick={handleIncrease}
                        className="px-3 py-1 text-gray-600 transition hover:bg-gray-100"
                        aria-label="Increase quantity"
                    >
                        <PlusIcon className="h-4 w-4" />
                    </button>
                </div>
            </div>

             <div className="mt-4 flex justify-between border-t pt-2">
                <span className="font-semibold">Subtotal</span>
                <span className="font-semibold text-gray-900">{formatCurrency(displayData.currentPrice * displayData.quantity)}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartCard;