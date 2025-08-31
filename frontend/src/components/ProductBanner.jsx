import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { bannerSlides } from '../data/bannerData';
import { FaApple } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';

function ProductBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const autoPlayRef = useRef(null);

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

    const currentSlideData = bannerSlides[currentSlide];

    return (
        <div className="relative w-full h-full rounded-md shadow-lg overflow-hidden group">
            <div className={`absolute inset-0 ${currentSlideData.bgColor} transition-all duration-1000 ease-in-out`}></div>

            <div
                className="flex transition-transform duration-700 ease-in-out w-full h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {bannerSlides.map((slide) => (
                    <div
                        key={slide.title}
                        // UPDATED: Changed justify-between to justify-center and increased the gap on larger screens
                        className="flex-shrink-0 w-full h-full p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-8"
                    >
                        {/* Text Content */}
                        <div className="flex-1 w-1/2 flex items-center justify-center order-4 md:order-1">
                            <div className={`flex-1 text-center md:text-left ${slide.textColor} z-10 max-w-md order-1 md:order-2`}>
                                <div className="flex items-center justify-center md:justify-start gap-x-3 mb-4 opacity-90">
                                    <FaApple className="w-6 h-6" />
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
                        {/* Image */}
                        <div className="flex-1 w-1/2 flex items-center justify-center order-4 md:order-1">
                            <img src={slide.image} alt={slide.title} className="w-auto h-40 sm:h-56 md:h-72 lg:h-80 object-contain z-10" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation controls (no changes needed here) */}
            <button onClick={() => { prevSlide(); resetAutoPlay(); }} aria-label="Previous Slide" className="absolute top-0 left-0 h-full w-1/7 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-black/20 to-transparent flex items-center p-4">
                <ChevronLeftIcon className="h-8 w-8 text-white drop-shadow-md" />
            </button>
            <button onClick={() => { nextSlide(); resetAutoPlay(); }} aria-label="Next Slide" className="absolute top-0 right-0 h-full w-1/7 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-l from-black/20 to-transparent flex items-center justify-end p-4">
                <ChevronRightIcon className="h-8 w-8 text-white drop-shadow-md" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {bannerSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => { goToSlide(index); resetAutoPlay(); }}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ?
                            `scale-125 ring-2 ring-offset-2 ${currentSlideData.textColor === 'text-white' ? 'ring-white ring-offset-black/50' : 'ring-black ring-offset-white/50'}`
                            : `${currentSlideData.textColor === 'text-white' ? 'bg-white/40 hover:bg-white/70' : 'bg-black/40 hover:bg-black/70'}`
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductBanner;