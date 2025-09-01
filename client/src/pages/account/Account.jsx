// src/pages/account/Account.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut, updateUser } from '../../features/user/userSlice.js'; // ✅ corrected path

// --- Reusable Sub-components ---

// The main form for editing the user's profile
const EditProfile = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: user?.name?.split(' ')[0] || '',
        lastName: user?.name?.split(' ')[1] || '',
        email: user?.email || '',
        address: user?.address || 'Kingston, 5236, United State',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSaveChanges = (e) => {
        e.preventDefault();

        // Only update user details (password change skipped here)
        const updatedUser = {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            address: formData.address,
        };

        dispatch(updateUser(updatedUser));
        alert("Profile changes saved successfully!");
    };

    return (
        <div className="p-4 sm:p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-red-500 mb-6">Edit Your Profile</h2>
            <form onSubmit={handleSaveChanges} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            className="w-full rounded border border-gray-300 p-3 focus:ring-red-500 focus:border-red-500" 
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            className="w-full rounded border border-gray-300 p-3 focus:ring-red-500 focus:border-red-500" 
                        />
                    </div>
                </div>

                {/* Email & Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="w-full rounded border border-gray-300 p-3 focus:ring-red-500 focus:border-red-500" 
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            name="address" 
                            value={formData.address} 
                            onChange={handleChange} 
                            className="w-full rounded border border-gray-300 p-3 focus:ring-red-500 focus:border-red-500" 
                        />
                    </div>
                </div>

                {/* Password Fields (Frontend only right now) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password Changes</label>
                    <div className="space-y-4">
                        <input 
                            type="password" 
                            name="currentPassword" 
                            value={formData.currentPassword} 
                            onChange={handleChange} 
                            placeholder="Current Password" 
                            className="w-full rounded border border-gray-300 p-3 focus:ring-red-500 focus:border-red-500" 
                        />
                        <input 
                            type="password" 
                            name="newPassword" 
                            value={formData.newPassword} 
                            onChange={handleChange} 
                            placeholder="New Password" 
                            className="w-full rounded border border-gray-300 p-3 focus:ring-red-500 focus:border-red-500" 
                        />
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            value={formData.confirmPassword} 
                            onChange={handleChange} 
                            placeholder="Confirm New Password" 
                            className="w-full rounded border border-gray-300 p-3 focus:ring-red-500 focus:border-red-500" 
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" className="px-6 py-2 rounded">Cancel</button>
                    <button type="submit" className="px-8 py-2 rounded bg-red-500 text-white font-semibold transition hover:bg-red-600">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

// --- MAIN ACCOUNT PAGE COMPONENT ---
const Account = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logOut());
        navigate('/'); // Redirect to home after logout
    };

    return (
        <div className="w-[90%] mx-auto my-12 md:my-16">
            {/* Breadcrumb and Welcome Header */}
            <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
                <p className="text-gray-500">
                    Home / <span className="font-medium text-black">My Account</span>
                </p>
                <p>Welcome, <span className="font-medium text-red-500">{user?.name || 'Guest'}</span>!</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                {/* --- Sidebar Navigation (Desktop/Tablet) --- */}
                <aside className="hidden md:block w-full md:w-1/4 lg:w-1/5">
                    <nav className="flex flex-col space-y-2">
                        <h3 className="font-semibold px-4 pb-2">Manage My Account</h3>
                        <NavLink 
                            to="/account" 
                            className={({isActive}) => `pl-8 py-2 rounded ${isActive ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
                        >
                            My Profile
                        </NavLink>
                        <h3 className="font-semibold px-4 pt-4 pb-2">My Orders</h3>
                        <NavLink to="/orders" className="pl-8 py-2 rounded hover:bg-gray-100">My Returns</NavLink>
                        <NavLink to="/cancellations" className="pl-8 py-2 rounded hover:bg-gray-100">My Cancellations</NavLink>
                        <button 
                            onClick={handleLogout} 
                            className="text-left pl-4 py-2 mt-4 font-semibold text-red-500 hover:bg-red-50 rounded"
                        >
                            Logout
                        </button>
                    </nav>
                </aside>

                {/* --- Main Content Area --- */}
                <main className="flex-1 w-full">
                    <EditProfile />
                </main>
            </div>
        </div>
    );
};

export default Account;
