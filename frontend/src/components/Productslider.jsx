import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { cardData } from '../data/product.js';
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

  return (
    // Note: The code you provided had w-[97%], I've kept that here.
    <section className="w-[97%] mx-auto px-4 sm:px-6 lg:px-4 my-12 md:my-16">
      
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
        <SectionHeader title="Flash Sale" subtitle="Today's" />
        
        {/* This div is correctly configured to only show on large screens (desktops) */}
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
        // The 'scrollbar-hide' class here will work once you install the plugin (Option A).
        // Or, you can change it to 'no-scrollbar' if you use the CSS from Option B.
        className="flex gap-4 md:gap-6 lg:gap-4 py-8 mt-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {cardData.map(card => (
          <div 
            key={card.id} 
            className="flex-none snap-start w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
             <Card card={card} />
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