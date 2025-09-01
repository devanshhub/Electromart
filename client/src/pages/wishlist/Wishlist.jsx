import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleWishlist } from '../../features/wishlist/wishlistSlice.js';
import { addItem } from '../../features/cart/cartSlice.js';
import { formatCurrency } from '../../utils/formatters.js';
import { cardData as allProducts } from '../../data/product.js';

// --- Reusable Components for this page ---
import { XMarkIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

// UPDATED: This card now has the desktop hover effect for the "Move to Cart" button.
const WishlistItemCard = ({ item: itemFromWishlist, onRemove, onAddToCart }) => {
  const productDetails = allProducts.find(p => p.id === itemFromWishlist.id);

  if (!productDetails) {
    return null;
  }

  const { image, name, currentPrice, originalPrice, id } = productDetails;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg">
      {/* Image Container */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-t-lg bg-neutral-100 aspect-square p-4">
        <Link to={`/allproducts/${id}`}>
            <img
                loading="lazy"
                src={image}
                alt={name}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
        </Link>
        {/* Remove Button */}
        <button
          onClick={onRemove}
          className="absolute top-3 right-3 z-10 rounded-full bg-red-500 p-1.5 text-white shadow-md transition hover:bg-red-600"
          aria-label="Remove from wishlist"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
        
        {/* Desktop "Move to Cart" Button - appears on hover */}
        <button
          onClick={onAddToCart}
          className="absolute bottom-0 hidden h-10 w-full items-center justify-center bg-black text-white transition-all duration-300 translate-y-full group-hover:translate-y-0 lg:flex"
          aria-label="Move to cart"
        >
          Move to Cart
        </button>
      </div>

      {/* Details Section */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-medium text-black line-clamp-2 min-h-[2.5rem] lg:text-base lg:min-h-[3rem]">
          <Link to={`/allproducts/${id}`}>{name}</Link>
        </h3>
        <div className="mt-auto flex items-center gap-3 pt-2 text-sm lg:text-base">
          <span className="font-medium text-red-500">{formatCurrency(currentPrice)}</span>
          {originalPrice && (
            <span className="font-medium text-black line-through opacity-50">{formatCurrency(originalPrice)}</span>
          )}
        </div>
      </div>

      {/* Mobile "Move to Cart" Button - always visible, hidden on desktop */}
      <button
        onClick={onAddToCart}
        className="mt-auto flex h-10 w-full items-center justify-center rounded-b-lg bg-black text-white transition-colors hover:bg-neutral-800 lg:hidden"
      >
        Move to Cart
      </button>
    </div>
  );
};

// Main Wishlist Page Component
const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleRemoveFromWishlist = (item) => {
    dispatch(toggleWishlist({ item }));
  };

  const handleMoveToCart = (item) => {
    dispatch(addItem({ item, quantity: 1 }));
    dispatch(toggleWishlist({ item }));
  };

  return (
    <main className="w-[90%] mx-auto my-12 md:my-16">
      <div className="flex flex-col items-start gap-4 mb-8 md:flex-row md:items-center md:justify-between">
        <p className="text-gray-500">
          Home / <span className="font-medium text-black">Wishlist</span>
        </p>
        <h1 className="text-xl font-medium">Wishlist ({wishlistItems.length})</h1>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 sm:gap-6">
          {wishlistItems.map((item) => (
            <WishlistItemCard
              key={item.id}
              item={item}
              onRemove={() => handleRemoveFromWishlist(item)}
              onAddToCart={() => handleMoveToCart(item)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          <h2 className="mt-4 text-2xl font-medium text-gray-800">Your Wishlist is Empty</h2>
          <p className="mt-2 text-gray-500">Looks like you haven’t added anything to your wishlist yet.</p>
          <Link
            to="/allproducts"
            className="mt-6 rounded bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Return to Shop
          </Link>
        </div>
      )}

      {/* "Just For You" Section for re-engagement */}
      
    </main>
  );
};

WishlistItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Wishlist;