import React, { useState, useEffect, useRef } from 'react'; // <-- CHANGED: Added useState and useEffect
import { Link } from 'react-router-dom';
import axios from 'axios'; // <-- NEW: Added axios for API calls
import Card from '../components/Card';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const SectionHeader = ({ title, subtitle }) => (
  <div className="flex flex-col w-full">
    <div className="flex items-center">
      <div className="w-3 h-8 bg-red-500 rounded-sm mr-4"></div>
      <h2 className="text-base font-semibold text-red-500">{subtitle}</h2>
    </div>
    <h1 className="mt-4 text-2xl md:text-3xl font-semibold">{title}</h1>
  </div>
);

const ProductSlider = () => {
  // --- NEW: State for products, loading, and error handling ---
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- PRESERVED: Your scrolling logic is untouched ---
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
      const scrollTo = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // --- NEW: useEffect to fetch data from the API ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/products');
        // Take a slice of the products to feature in the slider (e.g., the first 12)
        setProducts(response.data.slice(0, 12));
        setError(null);
      } catch (err) {
        setError('Could not load products.');
        console.error("API Error in ProductSlider:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // The empty array ensures this runs only once when the component mounts

  // --- NEW: Render loading and error states for a better UX ---
  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-600">{error}</div>;
  }

  return (
    <section className="w-[96%] mx-auto px-4 sm:px-6 lg:px-4 my-16 md:my-16">
      
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
        <SectionHeader title="Explore Our Products" subtitle="Featured" /> {/* Changed title for context */}
        
        <div className="hidden lg:flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-50"
            aria-label="Scroll Left"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-50"
            aria-label="Scroll Right"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-6 lg:gap-4 py-8 mt-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {/* --- CHANGED: Mapping over the 'products' state from the API --- */}
        {products.map(product => (
          <div 
            key={product._id} // <-- Use unique '_id' from the database
            className="flex-none snap-start w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
             {/* --- THE CRITICAL FIX: Pass 'product' prop, not 'card' --- */}
             <Card product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 lg:mt-12">
        <Link 
          to="/allproducts" 
          className="px-12 py-3 text-white transition-colors bg-red-500 rounded hover:bg-red-600 font-semibold"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default ProductSlider;