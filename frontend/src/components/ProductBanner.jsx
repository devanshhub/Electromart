import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { bannerSlides } from '../data/bannerData';

// --- MAIN COMPONENT ---
function ProductBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const autoPlayRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Reset and start autoplay timer
    useEffect(() => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
        autoPlayRef.current = setInterval(nextSlide, 4000); // Change slide every 7 seconds
        return () => clearInterval(autoPlayRef.current);
    }, [currentSlide]);

    // --- Touch Controls for Mobile ---
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 75) { // Min swipe distance
            nextSlide();
        } else if (touchEndX.current - touchStartX.current > 75) {
            prevSlide();
        }
    };

    // --- Arrow Key Navigation ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const currentSlideData = bannerSlides[currentSlide];

    return (
        <div
            className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden group"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Background Color Transition */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgColor} transition-all duration-1000 ease-in-out`}></div>

            {/* Slides Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out w-full h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {bannerSlides.map((slide) => (
                    <div
                        key={slide.title}
                        className="flex-shrink-0 w-full h-full p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center justify-center md:justify-between"
                    >
                        {/* Text Content */}
                        <div className={`flex-1 text-center mx-auto md:text-right ${slide.textColor} z-10`}>
                            <div className="flex items-center justify-end mx-auto mb-2 opacity-80">
                                <svg className="flex w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1395 1280q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-512-1024q-26 0-45-19t-19-45v-224q0-26 19-45t45-19h256q26 0 45 19t19 45v224q0 26-19 45t-45-19h-256zm512 0q-26 0-45-19t-19-45v-224q0-26 19-45t45-19h256q26 0 45 19t19 45v224q0 26-19 45t-45-19h-256zm-1024 1024q0 209 103 385.5t279.5 279.5 385.5 103 385.5-103 279.5-279.5 103-385.5q0-251-122.5-452.5t-328.5-286.5q-12 5-23 10.5t-24 12.5-25.5 14-26.5 15q-31 19-64 43t-66.5 52-68 58-69.5 61.5-69.5 63-70 61.5q-255-93-453.5-316.5t-198.5-492.5q0-1 .5-2t.5-2q-10-21-16-43.5t-10-44.5-3.5-46.5-1-47.5q-1-18 .5-35.5t4.5-34.5 11-32.5 16-30 25-26.5 32-21 42-14.5 53-6.5q13-1 29-1h32q13 0 21 .5t15.5 2 13 3 13.5 4.5 11 5.5 12.5 8 9.5 9 11 12.5 7 13.5q-2 2-4 5t-3 5-4.5 8-3.5 8.5-4.5 12-3 12.5-3.5 17.5-2 18-1.5 21.5-.5 23.5q-129 349-8 676 96-150 282-243q34-17 68.5-27t70.5-14q-11-20-19-41t-13.5-42-12-42.5-9.5-42.5-5-42q0-106 75-181t181-75 181 75 75 181-75 181-181 75q-42 0-81-14.5t-70-42.5q-179 111-285 291-9 15-20 33t-20 33-21 34.5-21 34-21.5 33.5-20.5 31.5-21 30-20 28-20 25t-19 23q-1 1-1 1q-106-127-106-281z" />
                                </svg>
                                <span className="font-semibold text-sm tracking-wider uppercase">{slide.title}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold !leading-tight mb-4">
                                {slide.subtitle}
                            </h1>
                            <Link
                                to={slide.shopLink}
                                className={`inline-flex items-center text-lg font-semibold border-b-2 
                                    ${slide.textColor === 'text-white' ? 'border-white/50 hover:border-white' :
                                        'border-black/50 hover:border-black'} pb-1 transition-all duration-300 group/link`}
                            >
                                Buy Now
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="flex-1 flex items-center justify-center mx-auto mt-8 md:mt-0 relative">
                            <img
                                src={slide.imageUrl}
                                alt={slide.title}
                                className="w-auto h-48 sm:h-64 md:h-80 lg:h-96 object-contain z-10"
                                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/e2e8f0/e2e8f0?text=Image+Not+Found`; }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Masks */}
            <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute top-0 left-0 h-full w-1/5 md:w-1/6 z-20 flex items-center justify-start 
                text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r 
                from-black/40 to-transparent p-4 hover:from-black/50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute top-0 right-0 h-full w-1/5 md:w-1/6 z-20 flex items-center justify-end
                 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 bg-gradient-to-l from-black/40 to-transparent p-4 hover:from-black/50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>


            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {bannerSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? // Active slide: A transparent dot with a colored ring
                                `bg-transparent ring-2 ${bannerSlides[currentSlide].textColor === 'text-white' ? 'ring-white' : 'ring-black'}`
                                : 'bg-black/45 hover:bg-black'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductBanner;