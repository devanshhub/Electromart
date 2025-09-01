import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// FIXED: Changed the import from 'setUser' to 'logIn'
import { logIn } from '../../features/user/userSlice.js';

// --- Import Icons ---
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

// --- Import your image ---
import signupLogo from '../../assets/signupLogo.png';

const Signup = () => {
    // --- State for form fields ---
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    // --- State for validation errors ---
    const [errors, setErrors] = useState({});
    
    // --- State for password visibility and form submission loading ---
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    // --- React Router and Redux hooks ---
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // --- Handle input changes and update form data ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // --- Form validation logic ---
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
        setErrors(newErrors);
        // Return true if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    // --- Handle form submission ---
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // If the form is not valid, don't submit
        if (!validateForm()) return;
        
        setIsLoading(true);

        // Simulate an API call (e.g., to your backend to create a user)
        setTimeout(() => {
            console.log('Form Submitted:', formData);
            
            // --- FIXED: Dispatch 'logIn' with the correct, secure payload ---
            // In a real app, this data would come from your server after successfully creating the user.
            const mockUserData = { name: formData.name, email: formData.email, id: 'user-' + Date.now() };
            const mockAuthToken = 'aBcDeFgHiJkLmNoPqRsTuVwXyZ' + Date.now(); // A fake auth token.

            // Dispatch the logIn action to automatically log in the new user.
            // Notice we are NOT dispatching the password.
            dispatch(logIn({
                user: mockUserData,
                token: mockAuthToken,
            }));
            
            setIsLoading(false);
            
            // Navigate to home page on successful signup
            navigate("/");
        }, 2000); // 2-second delay to simulate network request
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
            <div className='flex w-full max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden'>
                
                {/* Left Side: Image (Hidden on smaller screens) */}
                <div className='hidden md:block w-1/2'>
                    <img src={loginLogo} className='w-full h-full object-cover' alt="Signup illustration" />
                </div>

                {/* Right Side: Form */}
                <div className='w-full md:w-1/2 bg-white p-8 md:p-12'>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-800 mb-2'>Create an Account</h1>
                        <p className='text-gray-600 mb-8'>Join us and start shopping!</p>
                        
                        <form onSubmit={handleSubmit} noValidate>
                            {/* --- Name Input --- */}
                            <div className='relative mb-6'>
                                <FaUser className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400' />
                                <input 
                                    className={`pl-10 p-3 w-full border rounded-md transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50`}
                                    type="text" 
                                    name="name"
                                    placeholder='Your Name' 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name}</p>}
                            </div>

                            {/* --- Email Input --- */}
                            <div className='relative mb-6'>
                                <FaEnvelope className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400' />
                                <input 
                                    className={`pl-10 p-3 w-full border rounded-md transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50`}
                                    type="email"
                                    name="email"
                                    placeholder='Email or Phone Number'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
                            </div>

                            {/* --- Password Input --- */}
                            <div className='relative mb-6'>
                                <FaLock className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400' />
                                <input 
                                    className={`pl-10 p-3 w-full border rounded-md transition-all duration-300 ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50`}
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
                                {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password}</p>}
                            </div>

                            {/* --- Submit Button --- */}
                            <button 
                                type='submit'
                                className='w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors duration-300 flex items-center justify-center disabled:bg-red-300'
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className='w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin'></div>
                                ) : (
                                    'Create Account'
                                )}
                            </button>
                        </form>
                        
                        {/* --- Social Login Separator --- */}
                        <div className="flex items-center my-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        {/* --- Google Sign Up Button --- */}
                        <button className='w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2'>
                            <FcGoogle size={22}/>
                            <span>Sign up with Google</span>
                        </button>
                        
                        {/* --- Link to Log In --- */}
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