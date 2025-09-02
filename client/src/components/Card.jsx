import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../features/cart/cartSlice.js';
import { toggleWishlist } from '../features/wishlist/wishlistSlice.js';
import { formatCurrency } from '../utils/formatters.js';
import { getStarImage } from "../utils/starRating";

const IconButton = ({ src, alt, onClick }) => (
  <button onClick={onClick} className="p-2 bg-white rounded-full hover:bg-neutral-200 transition-colors duration-300">
    <img loading="lazy" src={src} alt={alt} className="w-6 h-6" />
  </button>
);

const RatingStars = ({ rating, reviews }) => (
  <div className="flex items-center gap-2">
    <img
      loading="lazy"
      src={getStarImage(rating)}
      alt={`${rating} star rating`}
      className="w-20 lg:w-[100px] h-auto"
    />
    <span className="text-xs lg:text-sm font-semibold text-black opacity-60">({reviews})</span>
  </div>
);

// --- MAIN COMPONENT (MERGED) ---
const Card = ({ product }) => { // <-- CHANGED: Prop is now 'product'
  const dispatch = useDispatch();

  // --- Destructure properties from the 'product' prop (from your database) ---
  const { _id, name, price, originalPrice, imageUrls, rating, numReviews } = product;

  // --- Calculate discount on-the-fly ---
  const discountPercent = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  // Get wishlist items from the Redux store
  const wishlistItems = useSelector((state) => state.wishlist.items);
  // Check if the current product is in the wishlist using its unique '_id'
  const isWishlisted = wishlistItems.some((item) => item._id === product._id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Dispatch the entire 'product' object to the cart
    dispatch(addItem({ item: product, quantity: 1 }));
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Dispatch the entire 'product' object to the wishlist
    dispatch(toggleWishlist({ item: product }));
  };

  // Use the first image in the array as the main display image
  const displayImage = imageUrls && imageUrls.length > 0 ? imageUrls[0] : '/image/placeholder.png';

  return (
    // Link to the product page using its unique '_id' from the database
    <Link to={`/allproducts/${_id}`} className="block w-full lg:w-[270px] lg:flex-shrink-0 group h-full">
      <div className="flex flex-col h-full">
        <div className="relative flex flex-col items-center justify-center p-3 sm:p-4 overflow-hidden rounded bg-neutral-100 aspect-square">
          {discountPercent > 0 && (
            <div className="absolute top-3 left-3 px-3 py-1 text-xs text-white bg-red-500 rounded">
              -{discountPercent}%
            </div>
          )}
          
          <div className="absolute top-3 right-3 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <IconButton 
              onClick={handleWishlistToggle}
              src={isWishlisted ? "/image/FillHeart.png" : "/image/Heart.png"} 
              alt={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"} 
            />
          </div>

          <img
            loading="lazy"
            src={displayImage} // Use the primary image
            alt={name}
            className="object-contain h-4/5 w-4/5 transition-transform duration-300 group-hover:scale-110"
          />
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 hidden lg:flex items-center justify-center w-full h-10 text-white transition-all duration-300 translate-y-full bg-black group-hover:translate-y-0"
          >
            <img src="/image/Carticon.png" className="mr-2" alt="cart icon" />
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col mt-4 flex-1">
          <h3 className="self-stretch text-sm lg:text-base text-black font-medium line-clamp-2 min-h-[2.5rem] lg:min-h-[3rem]">
            {name}
          </h3>
          <div className="flex items-center gap-3 mt-2 text-sm lg:text-base">
            <span className="text-red-500 font-medium">{formatCurrency(price)}</span>
            {originalPrice && (
              <span className="text-black line-through opacity-50 font-medium">{formatCurrency(originalPrice)}</span>
            )}
          </div>
          <div className="mt-auto pt-2">
            {/* Use 'numReviews' from the database */}
            <RatingStars rating={rating} reviews={numReviews} />
          </div>
        </div>
        
        <button
            onClick={handleAddToCart}
            className="flex lg:hidden items-center justify-center w-full h-10 mt-4 text-white bg-black rounded transition-colors hover:bg-neutral-800"
        >
            <img src="/image/Carticon.png" className="mr-2" alt="cart icon" />
            Add to Cart
        </button>
      </div>
    </Link>
  );
};


// --- IMPORTANT: Updated PropTypes to match the new 'product' prop ---
Card.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
    numReviews: PropTypes.number,
  }).isRequired,
};

IconButton.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

RatingStars.propTypes = {
    rating: PropTypes.number,
    reviews: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Card;