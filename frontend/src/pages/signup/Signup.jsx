import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginLogo from '../../assets/loginLogo.png'
import { useSelector, useDispatch } from 'react-redux';

import { setUser, logOut } from '../../features/user/userSlice.js';

const Signup = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const user = useSelector((state) => state.user);
     const navigate = useNavigate()
  const dispatch = useDispatch();

     const handleSubmit =(e)=>{
         e.preventDefault();
         console.log(user);
         
        dispatch(setUser({ name:name, email:email,password:password }));
        navigate("/")
        
     }

  return (
    <div className='mt-6 flex items-center justify-center'>
            <div className='w-3/5  '>
                <img src={loginLogo} className='w-full h-full my-auto' alt="Sign up" />
            </div>
            <div className='w-2/5 flex justify-center items-center'>
                <div className=''>

                    <h1 className='text-3xl font-medium mb-4 ' >Create an account</h1>
                    <span className=''>Enter your details below</span>
                    <form onSubmit={handleSubmit} className='flex flex-col mt-10'  >
                        <input 
                        className='border-b-2 outline-none' 
                        type="text" 
                        placeholder='Name' 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                        <input 
                        className='border-b-2 outline-none mt-8' 
                        type="text" 
                        placeholder='Email or Phone Number' 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input 
                        className='mt-8 border-b-2 outline-none' 
                        type="password" 
                        placeholder='Password' 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                        <div className='flex flex-col items-center justify-between mt-5'>
                        <button   className='px-7 py-3 text-white w-full bg-red-500 rounded  ' >Create Account</button>
                        <span className='text-gray-500 mt-5' >Already have an account? <Link className='text-black underline' to="/login"> Log In</Link></span>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Signup