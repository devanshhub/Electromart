import React from 'react'
import iconsmail from "../../assets/iconsmail.png"
import iconsphone from "../../assets/iconsphone.png"

const Contact = () => {
    return (
        <div className='my-24  w-[80%] mx-auto flex gap-10 items-center justify-center'>
            <div className=' rounded-sm shadow-3xl border-blue-100 h-full  py-16 px-5' >
                <div className='flex justify-start gap-5 items-center' >
                    <img src={iconsphone} alt="icon " />
                    <h1 className='font-semibold' >  Call To Us </h1>
                </div>
                <p className='mt-4' >We are available 24/7, 7 days a week.</p>
                <p className='mt-3 mb-6'>Phone: +919628350440</p>
                <hr />
                <div className='flex justify-start mt-6 gap-5 items-center' >
                    <img src={iconsmail} alt="mail" />
                    <h1 className='font-semibold ' >Write To Us</h1>
                </div>
                <p className='mt-4' >Fill out our form and we will contact
                </p>
                <p>
                    you within 24 hours.
                </p>
                <p className='mt-3' >Emails: electromartnow@gmail.com</p>
                <p className='mt-3'>Emails: devanshhub@gmail.com</p>
            </div>
            <div className='w-2/3 rounded-sm p-6 shadow-3xl '>
                <form>
                    <div className='flex justify-between items-center' >
                        <input type="text" className='bg-gray-200 p-3 placeholder:text-gray-500 outline-none rounded' placeholder='Your Name*' />
                        <input type="text" className='bg-gray-200 p-3 placeholder:text-gray-500 outline-none rounded ' placeholder='Your Email*' />
                        <input type="text" className='bg-gray-200 p-3 placeholder:text-gray-500 outline-none rounded ' placeholder='Your Phone*' />
                    </div>
                    <textarea rows={10} cols={90} className=' p-3 bg-gray-200 mt-8 placeholder:text-gray-500 outline-none rounded ' placeholder='Your Message' />
                    <div className='flex items-center justify-end' >
                        <button className='px-7 py-3 text-white mt-5 bg-red-500 rounded' >Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact