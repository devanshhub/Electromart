import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation

const Notification = () => {
  return (
    <div className="bg-black text-white font-[Poppins]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-x-4 gap-y-1 py-2.5 px-4 text-center sm:flex-row">
        <p className="text-xs font-light sm:text-sm md:text-base">
          Winter Sale is <span className="font-semibold text-red-500">Live</span> For All Heaters - OFF 40% -  
          <Link
            to="/allproducts"
            className="whitespace-nowrap text-xs font-semibold underline underline-offset-2 transition hover:text-gray-300 sm:text-sm sm:underline-offset-4 md:text-base"
          >
            Shop Now
          </Link> </p>
      </div>
    </div>
  );
};

export default Notification;

