import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cardData } from "../data/product.js";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiHeart } from "react-icons/fi";

const Navbar = () => {
    const user = useSelector((state) => state.user);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    
    // Get the number of unique items for both cart and wishlist
    const cartItemCount = useSelector((state) => state.cart?.items.length || 0);
    const wishlistItemCount = useSelector((state) => state.wishlist?.items.length || 0); // NEW: Get wishlist count

    const desktopSearchRef = useRef(null);
    const mobileSearchRef = useRef(null);

    const filteredData = search
        ? cardData.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
        : [];

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    
    useEffect(() => {
        function handleClickOutside(event) {
            const isOutsideDesktop = desktopSearchRef.current && !desktopSearchRef.current.contains(event.target);
            const isOutsideMobile = !mobileSearchRef.current || !mobileSearchRef.current.contains(event.target);

            if (isOutsideDesktop && isOutsideMobile) {
                setSearch('');
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const activeLinkStyle = {
        color: 'black',
        textDecoration: 'underline',
        textUnderlineOffset: '8px',
        textDecorationThickness: '2px',
    };
    
    const handleLinkClick = () => {
        setSearch('');
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <NavLink to="/" onClick={handleLinkClick} className="text-2xl sm:text-3xl font-bold text-black">
                        S.S.D.N. ENTERPRISES
                    </NavLink>

                    <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
                        <NavLink to="/" onClick={handleLinkClick} className="text-gray-600 hover:text-black font-medium" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
                        <NavLink to="/allproducts" onClick={handleLinkClick} className="text-gray-600 hover:text-black font-medium" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>All Products</NavLink>
                        <NavLink to="/contact" onClick={handleLinkClick} className="text-gray-600 hover:text-black font-medium" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
                        <NavLink to="/about" onClick={handleLinkClick} className="text-gray-600 hover:text-black font-medium" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>About</NavLink>
                        
                        <div ref={desktopSearchRef} className="relative">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-400 w-72"
                                value={search}
                                onChange={handleSearchChange}
                            />
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            {search && (
                                <div className="absolute z-20 mt-2 w-full bg-white border rounded-lg shadow-lg max-h-80 overflow-y-auto">
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item) => (
                                            <NavLink to={`/allproducts/${item.id}`} key={item.id} className="flex items-center p-3 hover:bg-gray-100" onClick={handleLinkClick}>
                                                <img src={item.image} alt={item.name} className="w-12 h-12 object-contain mr-4"/>
                                                <div>
                                                    <p className="font-medium text-sm">{item.name}</p>
                                                    <p className="text-xs text-gray-500">₹{item.currentPrice}</p>
                                                </div>
                                            </NavLink>
                                        ))
                                    ) : ( <p className="p-4 text-sm text-gray-500">No results found.</p> )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* --- UPDATED WISHLIST ICON WITH BADGE --- */}
                        <NavLink to="/wishlist" className="relative text-gray-600 hover:text-black" aria-label="Wishlist">
                            <FiHeart className="h-6 w-6" />
                            {wishlistItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                    {wishlistItemCount}
                                </span>
                            )}
                        </NavLink>

                        <NavLink to="/cart" className="relative text-gray-600 hover:text-black" aria-label="Cart">
                            <FiShoppingCart className="h-6 w-6" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                    {cartItemCount}
                                </span>
                            )}
                        </NavLink>
                        
                        <NavLink to={user.loggedIn ? "/account" : "/signup"} className="text-gray-600 hover:text-black" aria-label="Account"><FiUser className="h-6 w-6" /></NavLink>
                        
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-black" aria-label="Open menu">
                                {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden pb-4">
                        <div ref={mobileSearchRef} className="relative mt-4 mb-4">
                           <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                value={search}
                                onChange={handleSearchChange}
                            />
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                             {search && (
                                <div className="absolute z-20 mt-2 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item) => (
                                            <NavLink to={`/allproducts/${item.id}`} key={item.id} className="flex items-center p-3 hover:bg-gray-100" onClick={handleLinkClick}>
                                                <img src={item.image} alt={item.name} className="w-12 h-12 object-contain mr-4"/>
                                                <div>
                                                    <p className="font-medium text-sm">{item.name}</p>
                                                    <p className="text-xs text-gray-500">₹{item.currentPrice}</p>
                                                </div>
                                            </NavLink>
                                        ))
                                    ) : ( <p className="p-4 text-sm text-gray-500">No results found.</p> )}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col space-y-3">
                            <NavLink to="/" onClick={handleLinkClick} className="text-gray-600 hover:text-black font-medium block px-3 py-2 rounded-md text-base" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
                            <NavLink to="/allproducts" onClick={handleLinkClick} className="text-gray-600 hover:text-black font-medium block px-3 py-2 rounded-md text-base" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>All Products</NavLink>
                            <NavLink to="/contact" onClick={handleLinkClick} className="text-gray-600 hover:text-black font-medium block px-3 py-2 rounded-md text-base" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
                            <NavLink to="/about" onClick={handleLinkClick} className="text-gray-600 hover:text-black font-medium block px-3 py-2 rounded-md text-base" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>About</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

