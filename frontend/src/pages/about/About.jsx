import React from 'react'


//Imported images
import ourstory1 from "../../assets/ourstory1.jpg"
import headphone from "../../assets/headphone.png"
import selleractive from "../../assets/selleractive.png"
import grosssale from "../../assets/grosssale.png"
import customeractive from "../../assets/customeractive.png"
import monthlysale from "../../assets/monthlysale.png"
import Tick from "../../assets/Tick.png"
import Services from "../../assets/Services.png"
import Productslider from '../../components/Productslider'

const About = () => {
  return (
    <div className='w-[90%] mx-auto' >
      <div className='py-20 flex items-center justify-between'>
        <div className=' w-1/2 mx-auto pr-20  '>
          <h1 className='font-semibold text-4xl mb-4'>Our Story</h1>
          <p>
            We are an innovative e-commerce platform specializing in high-quality electronic products. From cutting-edge gadgets and top-tier appliances to essential accessories, ElectroMart brings you the best in the world of electronics—all at unbeatable prices.

            Shop smart, shop ElectroMart.
          </p>
          <p className='mt-3'>
          Why choose ElectroMart?
            <br />
             ~ Wide Selection: Explore an extensive range of products tailored to meet. 
            <br />
             ~ Quality Assurance: We offer only the best, sourced from trusted brands.
            <br />
             ~ Seamless Experience: Enjoy a user-friendly interface, secure payment.
            <br />
             ~ Expert Support: Our team is here to help you make informed decisions and provide post-purchase assistance.
            <br />
          </p>
        </div>
        <div className='pl-10 w-1/2'>
          <img src={ourstory1} alt="ourStory" />
        </div>
      </div>
      <div className='flex justify-center items-center gap-5 mt-15' >
        <div className='w-1/4 flex flex-col hover:bg-red-500 hover:shadow-3xl rounded-lg hover:text-white justify-center items-center gap-5 py-10  border-2 '>
          <img src={selleractive} alt="seller" />
          <span className='font-semibold text-4xl' >10.5K</span>
          <span>Seller active our site</span>
        </div>
        <div className='w-1/4 flex flex-col hover:bg-red-500 hover:shadow-3xl rounded-lg hover:text-white justify-center items-center gap-5 py-10  border-2 '>
          <img src={monthlysale} alt="monthly" />
          <span className='font-semibold text-4xl' >30K</span>
          <span>Monthly Product Sale</span>
        </div>
        <div className='w-1/4 flex flex-col hover:bg-red-500 hover:shadow-3xl rounded-lg hover:text-white justify-center items-center gap-5 py-10  border-2 '>
          <img src={customeractive} alt="customer servise" />
          <span className='font-semibold text-4xl' >45.5K</span>
          <span>Customers Active On Site</span>
        </div>
        <div className='w-1/4 flex flex-col hover:bg-red-500 hover:shadow-3xl rounded-lg hover:text-white justify-center items-center gap-5 py-10  border-2 '>
          <img src={grosssale} alt="sale" />
          <span className='font-semibold text-4xl' >28K</span>
          <span>Annual Gross Sale On Site</span>
        </div>
      </div>
      <div className='flex mt-28 justify-between py-4 px-8 mb-28'>
        <div className='w-1/3 flex flex-col items-center justify-around'>
          <img src={Services} alt="services" />
          <h1 className='uppercase font-semibold mt-6' >Free and Fast delivery </h1>
          <span className='mt-2' >Free delivery for all orders over $140</span>
        </div>
        <div className='w-1/3 flex flex-col items-center justify-around'>
          <img src={headphone} alt="headphone" />
          <h1 className='uppercase font-semibold mt-6' >24/7 CUSTOMER SERVICE </h1>
          <span className='mt-2' >Friendly 24/7 customer support</span>
        </div>
        <div className='w-1/3 flex flex-col items-center justify-around'>
          <img src={Tick} alt="Tick" />
          <h1 className='uppercase font-semibold mt-6' >MONEY BACK GUARANTEE </h1>
          <span className='mt-2' >We reurn money within 30 days</span>
        </div>

      </div>

    </div>
  )
}

export default About