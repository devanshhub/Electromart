import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios'; // <-- Import axios for API calls
import Card from '../../components/Card';
import { FunnelIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

// --- Reusable Sub-components (No changes needed here) ---

const apiUrl = `${import.meta.env.VITE_API_URL}/api/products`;
const response = await axios.get(apiUrl);

const StarRatingFilter = ({ rating, setRating }) => (
    <div>
        <h3 className="text-lg font-semibold mb-2">Rating</h3>
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} onClick={() => setRating(star)} className={`text-2xl transition-colors ${star <= rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'}`}>
                    ★
                </button>
            ))}
        </div>
        {rating > 0 && <button onClick={() => setRating(0)} className="text-sm text-red-500 mt-2 hover:underline">Clear</button>}
    </div>
);

const FilterSidebar = ({ filters, setFilters, categories, minPrice, maxPrice, isOpen, onClose }) => (
    <aside className={`fixed top-24 bottom-0 left-0 z-40 w-72 bg-white shadow-xl p-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto md:sticky md:top-24 md:h-fit md:translate-x-0 md:w-1/4 lg:w-1/5`}>
        <div className="flex justify-between items-center md:hidden mb-4">
            <h2 className="text-xl font-bold">Filters</h2>
            <button onClick={onClose}><XMarkIcon className="h-6 w-6" /></button>
        </div>
        
        <div>
            <h3 className="text-lg font-semibold mb-3">Category</h3>
            <div className="space-y-2">
                {categories.map(category => (
                    <button 
                        key={category} 
                        onClick={() => setFilters(prev => ({ ...prev, category }))}
                        className={`block w-full text-left capitalize px-3 py-1.5 rounded text-sm font-medium transition-colors ${filters.category === category ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>

        <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Price Range</h3>
            <input 
                type="range"
                min={minPrice}
                max={maxPrice}
                value={filters.price}
                onChange={(e) => setFilters(prev => ({ ...prev, price: Number(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
            <div className="flex justify-between text-sm mt-2">
                <span>₹{minPrice}</span>
                <span>Up to ₹{filters.price}</span>
            </div>
        </div>

        <div className="mt-6">
            <StarRatingFilter rating={filters.rating} setRating={(r) => setFilters(prev => ({ ...prev, rating: r }))} />
        </div>
        
        <button 
            onClick={() => setFilters({ category: 'all', price: maxPrice, rating: 0 })}
            className="w-full mt-8 rounded border border-gray-400 py-2 font-semibold text-black transition hover:bg-gray-100"
        >
            Clear All Filters
        </button>
    </aside>
);

const Pagination = ({ productsPerPage, totalProducts, currentPage, onPageChange }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    if (totalPages <= 1) return null;

    return (
        <nav className="flex justify-center items-center space-x-2 mt-12">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
                <ChevronLeftIcon className="h-5 w-5" />
            </button>
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${currentPage === number ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
                >
                    {number}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
                <ChevronRightIcon className="h-5 w-5" />
            </button>
        </nav>
    );
};


// --- MAIN COMPONENT ---
const AllProducts = () => {
    // --- NEW STATE for handling API data ---
    const [allProducts, setAllProducts] = useState([]); // Holds the master list of products from the API
    const [loading, setLoading] = useState(true);       // True while fetching, false otherwise
    const [error, setError] = useState(null);           // Holds any error message

    // --- EXISTING STATE for UI controls ---
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState('default');
    const [filters, setFilters] = useState({
        category: 'all',
        price: 0, // Will be updated dynamically
        rating: 0,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    // --- NEW: useEffect to fetch data from the API when the component mounts ---
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:3000/api/products');
                setAllProducts(response.data);
                setError(null);
            } catch (err) {
                setError('Failed to load products. Please try again later.');
                console.error("API Error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []); // Empty array means this runs only once

    // --- MODIFIED: Calculate filter options dynamically from API data ---
    const { categories, minPrice, maxPrice } = useMemo(() => {
        if (allProducts.length === 0) {
            return { categories: ['all'], minPrice: 0, maxPrice: 1000, avgRating: 0 };
        }
        const uniqueCategories = ['all', ...new Set(allProducts.map(p => p.category).filter(Boolean))];
        const prices = allProducts.map(p => p.price);
        return {
            categories: uniqueCategories,
            minPrice: Math.min(...prices),
            maxPrice: Math.max(...prices),
        };
    }, [allProducts]);

    // --- NEW: useEffect to set the initial price filter once data is loaded ---
    useEffect(() => {
        if (maxPrice > 0) {
            setFilters(prev => ({ ...prev, price: maxPrice }));
        }
    }, [maxPrice]);


    // --- MODIFIED: Filter and sort the data from the `allProducts` state ---
    const filteredAndSortedProducts = useMemo(() => {
        let products = allProducts; // Use the state variable, not static data

        if (filters.category !== 'all') {
            products = products.filter(p => p.category === filters.category);
        }
        products = products.filter(p => p.price <= filters.price);
        if (filters.rating > 0) {
            // Assuming your product model doesn't have rating yet, this will be ready for when it does
            products = products.filter(p => Math.round(p.rating) >= filters.rating);
        }

        switch (sortOrder) {
            case 'price-asc':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price-desc':
                return [...products].sort((a, b) => b.price - a.price);
            case 'rating-desc':
                return [...products].sort((a, b) => b.rating - a.rating);
            default:
                return products;
        }
    }, [allProducts, filters, sortOrder]);
    
    useEffect(() => {
        setCurrentPage(1);
    }, [filters, sortOrder]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // --- NEW: Render loading and error states ---
    if (loading) {
        return <div className="text-center py-20">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-20 text-red-600">{error}</div>;
    }

    // --- Main render logic (mostly unchanged) ---
    return (
        <div className='w-[90%] mx-auto my-12 md:my-16'>
            <p className="text-gray-500 mb-8">
                Home / <span className="font-medium text-black">All Products</span>
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                <FilterSidebar 
                    filters={filters} 
                    setFilters={setFilters} 
                    categories={categories} 
                    minPrice={minPrice} 
                    maxPrice={maxPrice}
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />
                
                {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/30 z-30 md:hidden"></div>}

                <main className="flex-1 w-full">
                    <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
                        <p className="text-gray-600">
                            Showing <span className="font-bold">{currentProducts.length}</span> of <span className="font-bold">{filteredAndSortedProducts.length}</span> products
                        </p>
                        <div className="flex items-center gap-4">
                            <button onClick={() => setIsSidebarOpen(true)} className="flex items-center gap-2 rounded border px-3 py-1.5 md:hidden">
                                <FunnelIcon className="h-5 w-5" />
                                <span>Filter</span>
                            </button>
                            <select 
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="rounded border border-gray-300 px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-500"
                            >
                                <option value="default">Default Sorting</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="rating-desc">Sort by Rating</option>
                            </select>
                        </div>
                    </div>
                    
                    {currentProducts.length > 0 ? (
                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-6'>
                            {currentProducts.map(product => (
                                // MODIFIED: Pass 'product' prop and use '_id' from MongoDB for the key
                                <Card key={product._id} product={product} /> 
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h2 className="text-xl font-semibold">No Products Found</h2>
                            <p className="text-gray-500 mt-2">Try adjusting your filters to find what you're looking for.</p>
                        </div>
                    )}
                    
                    <Pagination 
                        productsPerPage={productsPerPage}
                        totalProducts={filteredAndSortedProducts.length}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </main>
            </div>
        </div>
    );
};

// ... (PropTypes sections remain the same)
Pagination.propTypes = { /* ... */ };
StarRatingFilter.propTypes = { /* ... */ };
FilterSidebar.propTypes = { /* ... */ };

export default AllProducts;