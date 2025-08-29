import React, { useState, useEffect, useRef } from 'react';

// Placeholder data for the banner slides.
// You can replace this with your own data.
const slides = [
  {
    title: 'iPhone 14 Series',
    subtitle: 'Up to 10% off Voucher',
    imageUrl: 'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.news_app_ed.jpg',
    bgColor: 'bg-black',
  },
  {
    title: 'Apple Watch Ultra',
    subtitle: 'Track your every move',
    imageUrl: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-S8-2up-hero-220907.jpg.landing-big_2x.jpg',
    bgColor: 'bg-slate-900',
  },
  {
    title: 'MacBook Air M2',
    subtitle: 'Power and portability',
    imageUrl: 'https://media.wired.com/photos/5bd883dc5b66a763e54f0b22/master/pass/macbookair3.jpg',
    bgColor: 'bg-slate-800',
  },
];

// ProductBanner component logic, moved here to be self-contained within this file.
const ProductBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      prevSlide();
    }
  };
  
  // Set up an automatic slide change
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl shadow-lg transition-colors duration-500 ${slides[currentSlide].bgColor}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full p-4 md:p-8 flex flex-col md:flex-row items-center justify-between min-h-[400px]"
          >
            <div className="flex-1 text-white text-center md:text-left p-4">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  className="w-8 h-8 mr-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.5 13.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zM12 21c-4.968 0-9-4.032-9-9s4.032-9 9-9c1.944 0 3.738.627 5.215 1.68L12 9V3c-3.523 0-6.417 2.457-7.24 5.75H12c3.314 0 6 2.686 6 6s-2.686 6-6 6z" />
                </svg>
                <span className="font-semibold text-lg">
                  {slide.title}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                {slide.subtitle}
              </h1>
              <a href={slide.shopLink} className="inline-flex items-center text-white border-b-2 border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
            <div className="flex-1 md:flex-none">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="max-h-96 w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

// The Hero component, with the static image replaced by the interactive banner.
const Hero = () => {
  return (
    <div className="flex justify-center mb-5">
      <div className="w-1/4 bg-white border-r pt-16 border-gray-300 p-4">
        <div className="flex flex-col p-4 space-y-4 text-gray-700 ">
          <a className="flex justify-between items-center hover:text-black">
            Tubular Batteries <span>›</span>
          </a>
          <a className="flex justify-between items-center hover:text-black">
            Inverter <span>›</span>
          </a>
          <a className="flex justify-between items-center hover:text-black">
            Solar Panels <span>›</span>
          </a>
          <a className="flex justify-between items-center hover:text-black">
            Voltage Stablizers <span>›</span>
          </a>
          <a className="flex justify-between items-center hover:text-black">
            Automotive Batteries <span>›</span>
          </a>
          <a className="flex justify-between items-center hover:text-black">
            Wires <span>›</span>
          </a>
          <a className="flex justify-between items-center hover:text-black">
            Switches & Sockets <span>›</span>
          </a>
          <a className="flex justify-between items-center hover:text-black">
            Lighting <span>›</span>
          </a>
          <a className="flex justify-between items-center hover:text-black">
            Appliances <span>›</span>
          </a>
          
        </div>
      </div>
      <div className="w-3/4 bg-white p-8">
        <ProductBanner />
      </div>
    </div>
  )
}

export default Hero;