import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// --- CORRECTED: Import the new async thunk ---
import { registerUser } from '../../features/user/userSlice.js';

// --- Import Icons ---
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

// --- Import your image ---
import loginLogo from '../../assets/loginLogo.png';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [clientErrors, setClientErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // --- NEW: Get status and API error from the Redux store ---
    const { isLoggedIn, status, error: apiError } = useSelector((state) => state.user);

    // --- NEW: useEffect to automatically navigate on successful signup ---
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        setClientErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // --- CORRECTED: Handle form submission with the async thunk ---
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        // Dispatch the async thunk with the form data.
        // Redux will manage the loading and error states.
        dispatch(registerUser(formData));
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
            <div className='flex w-full max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden'>
                
                <div className='hidden md:block w-1/2'>
                    <img src={loginLogo} className='w-full h-full object-cover' alt="Signup illustration" />
                </div>

                <div className='w-full md:w-1/2 bg-white p-8 md:p-12'>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-800 mb-2'>Create an Account</h1>
                        <p className='text-gray-600 mb-8'>Join us and start shopping!</p>
                        
                        <form onSubmit={handleSubmit} noValidate>
                            {/* --- CORRECTED: Display API error from Redux state --- */}
                            {status === 'failed' && apiError && (
                                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative mb-4' role="alert">
                                    <span className="block sm:inline">{apiError}</span>
                                </div>
                            )}

                            {/* --- Name Input --- */}
                            <div className='relative mb-6'>
                                <FaUser className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400' />
                                <input 
                                    className={`pl-10 p-3 w-full border rounded-md transition-all duration-300 ${clientErrors.name ? 'border-red-500' : 'border-gray-300'} focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50`}
                                    type="text" 
                                    name="name"
                                    placeholder='Your Name' 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                {clientErrors.name && <p className='text-red-500 text-xs mt-1'>{clientErrors.name}</p>}
                            </div>

                            {/* --- Email Input --- */}
                            <div className='relative mb-6'>
                                <FaEnvelope className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400' />
                                <input 
                                    className={`pl-10 p-3 w-full border rounded-md transition-all duration-300 ${clientErrors.email ? 'border-red-500' : 'border-gray-300'} focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50`}
                                    type="email"
                                    name="email"
                                    placeholder='Email Address'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {clientErrors.email && <p className='text-red-500 text-xs mt-1'>{clientErrors.email}</p>}
                            </div>

                            {/* --- Password Input --- */}
                            <div className='relative mb-6'>
                                <FaLock className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400' />
                                <input 
                                    className={`pl-10 p-3 w-full border rounded-md transition-all duration-300 ${clientErrors.password ? 'border-red-500' : 'border-gray-300'} focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50`}
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder='Password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <div className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash className='text-gray-400'/> : <FaEye className='text-gray-400'/>}
                                </div>
                                {clientErrors.password && <p className='text-red-500 text-xs mt-1'>{clientErrors.password}</p>}
                            </div>

                            {/* --- CORRECTED: Submit Button uses Redux status --- */}
                            <button 
                                type='submit'
                                className='w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors duration-300 flex items-center justify-center disabled:bg-red-300'
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? (
                                    <div className='w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin'></div>
                                ) : (
                                    'Create Account'
                                )}
                            </button>
                        </form>
                        
                        {/* --- Social Login and Log In Link (Unchanged) --- */}
                        <div className="flex items-center my-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <button className='w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2'>
                            <FcGoogle size={22}/>
                            <span>Sign up with Google</span>
                        </button>
                        
                        <p className='text-center text-gray-600 mt-8'>
                            Already have an account? 
                            <Link className='text-red-500 font-semibold hover:underline ml-1' to="/login">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;