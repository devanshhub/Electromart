import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { bannerSlides } from '../data/bannerData';
import { ChevronLeftIcon, ChevronRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';

function ProductBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const autoPlayRef = useRef(null);
    const touchStartX = useRef(null);

    const nextSlide = () => setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
    const goToSlide = (index) => setCurrentSlide(index);

    const resetAutoPlay = () => {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(nextSlide, 5000);
    };

    useEffect(() => {
        resetAutoPlay();
        return () => clearInterval(autoPlayRef.current);
    }, [currentSlide]);

    // --- Touch Handlers for Mobile Swipe ---
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        clearInterval(autoPlayRef.current); // Pause autoplay during swipe
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;

        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX.current;
        const swipeThreshold = 50; // Min distance for a swipe to be registered

        if (Math.abs(deltaX) > swipeThreshold) {
            if (deltaX > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
        
        touchStartX.current = null; // Reset touch start position
        resetAutoPlay(); // Resume autoplay after swipe
    };

    const currentSlideData = bannerSlides[currentSlide];

    return (
        <div className="relative w-full h-full rounded-md shadow-lg overflow-hidden group">
            <div className={`absolute inset-0 ${currentSlideData.bgColor} transition-all duration-1000 ease-in-out`}></div>

            <div
                className="flex transition-transform duration-700 ease-in-out w-full h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {bannerSlides.map((slide) => (
                    <div
                        key={slide.title}
                        className="flex-shrink-0 w-full h-full p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8"
                    >
                        {/* Text Content - UPDATED to be first on mobile */}
                        <div className="flex-1 flex items-center justify-center order-1 md:order-1">
                            <div className={`${slide.textColor} z-10 max-w-md text-center md:text-left`}>
                                <div className="flex items-center justify-center md:justify-start gap-x-3 mb-4 opacity-90">
                                    <span className="font-semibold text-sm tracking-wider uppercase">{slide.title}</span>
                                </div>
                                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl !leading-tight mb-6">{slide.subtitle}</h1>
                                <Link
                                    to={slide.shopLink}
                                    className={`inline-flex items-center text-base font-semibold border-b-2 ${slide.textColor === 'text-white' ? 'border-white/50 hover:border-white' : 'border-black/50 hover:border-black'} pb-1 transition-all duration-300 group/link`}
                                >
                                    Shop Now
                                    <ArrowUpRightIcon className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                </Link>
                            </div>
                        </div>
                        {/* Image - UPDATED to be second on mobile */}
                        <div className="flex-1 flex items-center justify-center order-2 md:order-2">
                            <img src={slide.image} alt={slide.title} className="w-auto h-56 sm:h-64 md:h-72 lg:h-80 object-contain z-10" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation controls */}
            <button onClick={() => { prevSlide(); resetAutoPlay(); }} aria-label="Previous Slide" className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-black/20 to-transparent items-center p-4 h-full">
                <ChevronLeftIcon className="h-8 w-8 text-white drop-shadow-md" />
            </button>
            <button onClick={() => { nextSlide(); resetAutoPlay(); }} aria-label="Next Slide" className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-l from-black/20 to-transparent items-center justify-end p-4 h-full">
                <ChevronRightIcon className="h-8 w-8 text-white drop-shadow-md" />
            </button>

            {/* Dots */}
            <div className="flex absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 space-x-3 z-20">
                {bannerSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => { goToSlide(index); resetAutoPlay(); }}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide ?
                            `scale-125 ring-1 md:ring-2 ring-offset-1 md:ring-offset-2 ${currentSlideData.textColor === 'text-white' ? 'ring-white ring-offset-black/50' : 'ring-black ring-offset-white/50'}`
                            : `${currentSlideData.textColor === 'text-white' ? 'bg-white/40 hover:bg-white/70' : 'bg-black/40 hover:bg-black/70'}`
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductBanner;