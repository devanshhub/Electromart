import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    // --- State for form data, errors, and submission status ---
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    // 'idle', 'loading', 'success', 'error'
    const [status, setStatus] = useState('idle'); 

    // --- Handle input changes ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    // --- Form validation logic ---
    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = 'Your name is required.';
        if (!formData.email) {
            newErrors.email = 'Your email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!formData.phone) {
            newErrors.phone = 'Your phone number is required.';
        } else if (!/^\+?[0-9\s-()]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // --- Handle form submission ---
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setStatus('loading');
        
        // --- Simulate API call (e.g., to an email service or backend) ---
        setTimeout(() => {
            console.log("Form submitted:", formData);
            // Simulate a successful submission
            setStatus('success');
            // Clear the form
            setFormData({ name: '', email: '', phone: '', message: '' });
            
            // To simulate an error, you could uncomment the following:
            // setStatus('error');

        }, 2000); // 2-second delay
    };

    return (
        <div className='py-8 md:py-12 bg-gray-50'>
            <div className='container mx-auto px-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
                    
                    {/* --- Left Column: Contact Information --- */}
                    <div className='bg-white p-8 rounded-lg shadow-lg space-y-8'>
                        <div>
                            <div className='flex items-center gap-4'>
                                <div className='bg-red-500 text-white p-3 rounded-full'>
                                    <FaPhoneAlt size={20} />
                                </div>
                                <h2 className='text-xl font-semibold text-gray-800'>Call Us</h2>
                            </div>
                            <p className='mt-4 text-gray-600'>We are available 24/7, 7 days a week.</p>
                            <a href="tel:+919628350440" className='mt-2 text-gray-800 font-medium block hover:text-red-500 transition-colors'>
                                Phone: +91 96283 50440
                            </a>
                        </div>
                        
                        <hr/>

                        <div>
                            <div className='flex items-center gap-4'>
                                <div className='bg-red-500 text-white p-3 rounded-full'>
                                    <FaEnvelope size={20} />
                                </div>
                                <h2 className='text-xl font-semibold text-gray-800'>Write To Us</h2>
                            </div>
                            <p className='mt-4 text-gray-600'>Fill out our form and we will contact you within 24 hours.</p>
                            <a href="mailto:electromartnow@gmail.com" className='mt-2 text-gray-800 font-medium block hover:text-red-500 transition-colors'>
                                Emails: electromartnow@gmail.com
                            </a>
                            <a href="mailto:devanshhub@gmail.com" className='mt-2 text-gray-800 font-medium block hover:text-red-500 transition-colors'>
                                Emails: devanshhub@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* --- Right Column: Contact Form --- */}
                    <div className='col-span-1 md:col-span-2 bg-white p-8 rounded-lg shadow-lg'>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6'>
                                {/* Name Input */}
                                <div>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Your Name*' className={`w-full p-3 bg-gray-100 rounded-md outline-none border-2 transition-colors ${errors.name ? 'border-red-500' : 'border-transparent'} focus:border-red-500`}/>
                                    {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name}</p>}
                                </div>
                                {/* Email Input */}
                                <div>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Your Email*' className={`w-full p-3 bg-gray-100 rounded-md outline-none border-2 transition-colors ${errors.email ? 'border-red-500' : 'border-transparent'} focus:border-red-500`}/>
                                    {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
                                </div>
                                {/* Phone Input */}
                                <div>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder='Your Phone*' className={`w-full p-3 bg-gray-100 rounded-md outline-none border-2 transition-colors ${errors.phone ? 'border-red-500' : 'border-transparent'} focus:border-red-500`}/>
                                    {errors.phone && <p className='text-red-500 text-xs mt-1'>{errors.phone}</p>}
                                </div>
                            </div>
                            
                            {/* Message Textarea */}
                            <div className='mb-6'>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows={8} placeholder='Your Message' className='w-full p-3 bg-gray-100 rounded-md outline-none border-2 border-transparent focus:border-red-500 transition-colors'/>
                            </div>

                            {/* Submit Button & Status Message */}
                            <div className='flex flex-col items-end'>
                                <button type='submit' disabled={status === 'loading'} className='px-8 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors disabled:bg-red-300 disabled:cursor-not-allowed flex items-center justify-center w-full sm:w-auto'>
                                    {status === 'loading' ? (
                                        <div className='w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin'></div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                                {status === 'success' && <p className='text-green-600 mt-4'>Thank you! Your message has been sent successfully.</p>}
                                {status === 'error' && <p className='text-red-600 mt-4'>Something went wrong. Please try again later.</p>}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;