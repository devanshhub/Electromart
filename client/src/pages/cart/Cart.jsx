import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice.js';
import { formatCurrency } from '../../utils/formatters.js';
import CartCard from '../../components/CartCard.jsx';

// Component for the Empty Cart state (no changes needed)
const EmptyCart = () => (
    <div className="mt-16 flex flex-col items-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      <h2 className="mt-4 text-2xl font-medium text-gray-800">Your Cart is Empty</h2>
      <p className="mt-2 text-gray-500">Looks like you haven’t added any items yet.</p>
      <Link
        to="/allproducts"
        className="mt-6 rounded bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600"
      >
        Start Shopping
      </Link>
    </div>
);

const Cart = () => {
    // --- CHANGED: We only need the 'items' array from the cart state ---
    const items = useSelector((state) => state.cart.items) || [];
    const dispatch = useDispatch();

    // --- NEW: Calculate totals directly in the component for accuracy ---
    const subtotal = useMemo(() => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [items]);

    const shippingCost = 0; // Or add your shipping logic here
    const total = subtotal + shippingCost;

    const handleClearCart = () => dispatch(clearCart());

    return (
        <main className="w-[90%] mx-auto my-12 md:my-16">
            <div className="flex flex-col items-start gap-4 mb-8 md:flex-row md:items-center md:justify-between">
                <p className="text-gray-500">
                    Home / <span className="font-medium text-black">Cart</span>
                </p>
                {items.length > 0 && (
                    <h1 className="text-2xl font-medium">
                        Your Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
                    </h1>
                )}
            </div>

            {items.length > 0 ? (
                <>
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6">
                        {/* --- THE CRITICAL FIX --- */}
                        {items.map(item => (
                            <CartCard
                                key={item._id}   // Use '_id' from the database
                                item={item}      // Pass the prop as 'item'
                            />
                        ))}
                    </div>

                    <div className="mt-12 flex flex-col-reverse items-start gap-8 lg:flex-row lg:justify-between">
                        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                             <Link to="/allproducts" className="w-full sm:w-auto text-center rounded border border-gray-400 px-6 py-3 font-semibold text-black transition hover:bg-gray-100">
                                 Return To Shop
                             </Link>
                            <button
                                onClick={handleClearCart}
                                className="w-full sm:w-auto rounded border border-gray-400 px-6 py-3 font-semibold text-black transition hover:bg-gray-100"
                            >
                                Clear Cart
                            </button>
                        </div>
                        
                        <div className="w-full rounded border-2 border-gray-400 p-6 lg:w-[40%] xl:w-[30%]">
                            <h2 className="text-xl font-medium">Cart Total</h2>
                            <div className="mt-6 flex justify-between border-b pb-4">
                                <span>Subtotal:</span>
                                {/* --- UPDATED: Use the newly calculated subtotal --- */}
                                <span>{formatCurrency(subtotal)}</span>
                            </div>
                            <div className="mt-4 flex justify-between border-b pb-4">
                                <span>Shipping:</span>
                                <span>{shippingCost === 0 ? 'Free' : formatCurrency(shippingCost)}</span>
                            </div>
                            <div className="mt-4 flex justify-between font-medium">
                                <span>Total:</span>
                                {/* --- UPDATED: Use the newly calculated total --- */}
                                <span>{formatCurrency(total)}</span>
                            </div>
                            <Link to="/checkout" className="mt-6 block w-full rounded bg-red-500 py-3 text-center font-semibold text-white transition hover:bg-red-600">
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <EmptyCart />
            )}
        </main>
    );
}

export default Cart;