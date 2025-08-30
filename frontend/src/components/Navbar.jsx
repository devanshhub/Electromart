import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cardData } from "../data/product.js";
// Icons from react-icons
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiHeart } from "react-icons/fi";

const Navbar = () => {
    const user = useSelector((state) => state.user);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [search, setSearch] = useState('');

    // --- Search Logic ---
    const filteredData = search
        ? cardData.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
        : [];

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    
    // Function to close the mobile menu
    const closeMobileMenu = () => setIsMenuOpen(false);

    // --- Active NavLink Style ---
    const activeLinkStyle = {
        color: 'black',
        textDecoration: 'underline',
        textUnderlineOffset: '8px',
        textDecorationThickness: '2px',
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Navbar Row */}
                <div className="flex items-center justify-between h-20">
                    {/* Left Side: Logo */}
                    <div className="flex-shrink-0">
                        <NavLink to="/" onClick={closeMobileMenu} className="text-2xl sm:text-3xl font-bold text-black">
                            ELECTROMART
                        </NavLink>
                    </div>

                    {/* Center: Desktop Menu & Search Bar (Visible on large screens and up) */}
                    <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
                        <NavLink to="/" className="text-gray-600 hover:text-black font-medium" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
                        <NavLink to="/allproducts" className="text-gray-600 hover:text-black font-medium" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>All Products</NavLink>
                        <NavLink to="/contact" className="text-gray-600 hover:text-black font-medium" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
                        <NavLink to="/about" className="text-gray-600 hover:text-black font-medium" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>About</NavLink>
                        
                        {/* Desktop Search Bar */}
                        <div className="relative">
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
                                            <NavLink 
                                                to={`/allproducts/${item.id}`} 
                                                key={item.id} 
                                                className="flex items-center p-3 hover:bg-gray-100" 
                                                onClick={() => setSearch('')}
                                            >
                                                <img src={item.image} alt={item.name} className="w-12 h-12 object-contain mr-4"/>
                                                <div>
                                                    <p className="font-medium text-sm">{item.name}</p>
                                                    <p className="text-xs text-gray-500">${item.currentPrice}</p>
                                                </div>
                                            </NavLink>
                                        ))
                                    ) : (
                                        <p className="p-4 text-sm text-gray-500">No results found.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side: Icons & Hamburger Menu */}
                    <div className="flex items-center space-x-4">
                        <NavLink to="/wishlist" className="text-gray-600 hover:text-black" aria-label="Wishlist">
                            <FiHeart className="h-6 w-6" />
                        </NavLink>
                        <NavLink to="/cart" className="text-gray-600 hover:text-black" aria-label="Cart">
                            <FiShoppingCart className="h-6 w-6" />
                        </NavLink>
                        {user.loggedIn ? (
                            <NavLink to="/account" className="text-gray-600 hover:text-black" aria-label="My Account">
                                <FiUser className="h-6 w-6" />
                            </NavLink>
                        ) : (
                            <NavLink to="/signup" className="text-gray-600 hover:text-black" aria-label="Register/Login">
                                <FiUser className="h-6 w-6" />
                            </NavLink>
                        )}
                        
                        {/* Hamburger Menu Button (Hidden on large screens and up) */}
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-black" aria-label="Open menu">
                                {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Menu Dropdown (Hidden on large screens and up) */}
                {isMenuOpen && (
                    <div className="lg:hidden pb-4">
                        {/* Search Bar */}
                        <div className="relative mt-4 mb-4">
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
                                            <NavLink 
                                                to={`/allproducts/${item.id}`} 
                                                key={item.id} 
                                                className="flex items-center p-3 hover:bg-gray-100" 
                                                onClick={() => { setSearch(''); closeMobileMenu(); }}
                                            >
                                                <img src={item.image} alt={item.name} className="w-12 h-12 object-contain mr-4"/>
                                                <div>
                                                    <p className="font-medium text-sm">{item.name}</p>
                                                    <p className="text-xs text-gray-500">${item.currentPrice}</p>
                                                </div>
                                            </NavLink>
                                        ))
                                    ) : (
                                        <p className="p-4 text-sm text-gray-500">No results found.</p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col space-y-3">
                            <NavLink to="/" className="text-gray-600 hover:text-black font-medium block px-3 py-2 rounded-md text-base" style={({ isActive }) => isActive ? activeLinkStyle : undefined} onClick={closeMobileMenu}>Home</NavLink>
                            <NavLink to="/allproducts" className="text-gray-600 hover:text-black font-medium block px-3 py-2 rounded-md text-base" style={({ isActive }) => isActive ? activeLinkStyle : undefined} onClick={closeMobileMenu}>All Products</NavLink>
                            <NavLink to="/contact" className="text-gray-600 hover:text-black font-medium block px-3 py-2 rounded-md text-base" style={({ isActive }) => isActive ? activeLinkStyle : undefined} onClick={closeMobileMenu}>Contact</NavLink>
                            <NavLink to="/about" className="text-gray-600 hover:text-black font-medium block px-3 py-2 rounded-md text-base" style={({ isActive }) => isActive ? activeLinkStyle : undefined} onClick={closeMobileMenu}>About</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;