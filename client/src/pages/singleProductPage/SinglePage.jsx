import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

// Using correct relative paths as requested
import { addItem } from '../../features/cart/cartSlice.js';
import { cardData } from '../../data/product.js';
import Card from '../../components/Card';
import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';

const SinglePage = () => {
    const { id } = useParams();
    const numericId = Number(id);
    
    // Find the specific product from your main data source
    const product = cardData.find((item) => item.id === numericId);
    
    // Check the Redux cart state to see if this item is already there
    const cartItem = useSelector((state) => 
        state.cart.items.find(item => item.id === numericId)
    );

    const dispatch = useDispatch();
    
    // Local state for the quantity selector on this page
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("Red"); // Default color
    const [selectedSize, setSelectedSize] = useState("M"); // Default size

    // If the item is already in the cart, sync the quantity selector when the page loads
    useEffect(() => {
        if (cartItem) {
            setQuantity(cartItem.quantity);
        }
    }, [cartItem]);

    const handleAddToCart = () => {
        if (product) {
            // Dispatch the item and the selected quantity to the cart
            dispatch(addItem({ item: product, quantity }));
        }
    };

    // If the product ID from the URL is not found, display a message
    if (!product) {
        return (
            <div className="w-[90%] mx-auto my-20 text-center">
                <h1 className="text-2xl font-bold">Product Not Found</h1>
                <Link to="/" className="mt-4 inline-block rounded bg-red-500 px-6 py-2 text-white">
                    Go Home
                </Link>
            </div>
        );
    }

    return (
        <div className='w-[90%] mx-auto my-12 md:my-16'>
            {/* Breadcrumb Navigation */}
            <p className="text-gray-500 text-sm mb-8">
                Home / Products / <span className="font-medium text-black">{product.name}</span>
            </p>

            {/* Main Product Section */}
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
                {/* Image Gallery (Responsive) */}
                <div className='w-full lg:w-3/5 flex flex-col-reverse md:flex-row gap-4'>
                    {/* Thumbnails */}
                    <div className='w-full md:w-1/4 flex flex-row md:flex-col gap-4'>
                        {[product.image1, product.image2, product.image3, product.image4].map((img, index) => (
                           img && (
                               <div key={index} className='bg-gray-100 rounded-md p-2 cursor-pointer hover:bg-gray-200'>
                                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full object-contain" />
                               </div>
                           )
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className='w-full md:flex-1 bg-gray-100 rounded-lg flex items-center justify-center p-4 min-h-[300px]'>
                        <img src={product.image} alt={product.name} className='max-h-[500px] object-contain' />
                    </div>
                </div>

                {/* Product Details (Responsive) */}
                <div className='w-full lg:w-2/5'>
                    <h1 className='text-2xl lg:text-3xl font-semibold'>{product.name}</h1>
                    <div className="my-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews} Reviews)</span>
                        <span className="hidden sm:inline mx-2 text-gray-300">|</span>
                        <span className="text-sm text-green-600 font-medium">In Stock</span>
                    </div>
                    <p className='text-2xl lg:text-3xl mb-4'>${product.currentPrice}</p>
                    <p className='text-gray-600 leading-relaxed pb-6 border-b'>{product.description || "High quality product with excellent features and a modern design. Perfect for everyday use."}</p>
                    
                    {/* Variants */}
                    <div className="mt-6 flex flex-col gap-4">
                        {/* Colors */}
                        <div className="flex items-center gap-4">
                            <span className="font-medium">Colour:</span>
                             {['Red', 'Blue'].map(color => (
                                <button key={color} onClick={() => setSelectedColor(color)} className={`h-8 w-8 rounded-full border-2 ${selectedColor === color ? 'border-red-500' : 'border-transparent'}`}>
                                    <span className={`block h-full w-full rounded-full border-2 border-white bg-${color.toLowerCase()}-500`}></span>
                                </button>
                            ))}
                        </div>
                        {/* Sizes */}
                        <div className="flex items-center gap-4 flex-wrap">
                            <span className="font-medium">Size:</span>
                            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                <button key={size} onClick={() => setSelectedSize(size)} className={`flex h-10 w-10 items-center justify-center rounded border text-sm font-medium transition ${selectedSize === size ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 hover:bg-gray-100'}`}>{size}</button>
                            ))}
                        </div>
                    </div>

                    {/* Actions (Responsive) */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                         <div className="flex items-center rounded border border-gray-300 w-full sm:w-auto">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-1/3 sm:w-auto px-4 py-3 text-2xl font-light text-gray-600 transition hover:bg-red-500 hover:text-white disabled:opacity-50" aria-label="Decrease quantity">-</button>
                            <span className="w-1/3 sm:w-auto text-center px-6 py-3 font-medium text-lg">{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)} className="w-1/3 sm:w-auto px-4 py-3 text-2xl font-light text-gray-600 transition hover:bg-red-500 hover:text-white" aria-label="Increase quantity">+</button>
                        </div>
                        <button onClick={handleAddToCart} className="flex-1 rounded bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600">
                            Add to Cart
                        </button>
                        <button className="rounded border border-gray-300 p-3 transition hover:border-red-500 hover:text-red-500">
                            <HeartIcon className="h-6 w-6"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Related Items Section */}
            <div className='mt-24'>
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-10 w-5 rounded bg-red-500"></div>
                    <h2 className="text-red-500 font-semibold">Related Items</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {cardData.slice(0, 5).map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SinglePage;

