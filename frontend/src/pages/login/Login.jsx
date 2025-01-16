import React from 'react'
import loginLogo from '../../assets/loginLogo.png'

const Login = () => {
    return (
        <div className='mt-6 flex items-center justify-center'>
            <div className='w-3/5  '>
                <img src={loginLogo} className='w-full h-full my-auto' alt="login" />
            </div>
            <div className='w-2/5 flex justify-center items-center'>
                <div className=''>
                    <h1 className='text-3xl font-medium mb-4 ' >Login to Electromart</h1>
                    <span className=''>Enter your details below</span>
                    <form className='flex flex-col mt-10'  >
                        <input className='border-b-2 outline-none' type="text" placeholder='Email or Phone Number' />
                        <input className='mt-8 border-b-2 outline-none' type="password" placeholder='Password' />
                        <div className='flex items-center justify-between mt-5'>
                        <button className='px-7 py-3 text-white  bg-red-500 rounded  ' >Log In</button>
                        <span className='text-red-500' >Forget password?</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login