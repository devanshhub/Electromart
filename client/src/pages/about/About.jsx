import React from "react";

// Images
import ourstory1 from "../../assets/ourstory1.jpg";
import selleractive from "../../assets/selleractive.png";
import monthlysale from "../../assets/monthlysale.png";
import customeractive from "../../assets/customeractive.png";
import grosssale from "../../assets/grosssale.png";
import Services from "../../assets/Services.png";
import headphone from "../../assets/headphone.png";
import Tick from "../../assets/Tick.png";

// Team member images
import devansh from "../../assets/devansh.png";
import samarth from "../../assets/samarth.png";
import priyashu from "../../assets/priyashu.png";

// Stats data
const stats = [
  { img: selleractive, value: "10.5k", label: "Sellers active our site" },
  { img: monthlysale, value: "33k", label: "Monthly Product Sale", highlight: true },
  { img: customeractive, value: "45.5k", label: "Customers active on site" },
  { img: grosssale, value: "25k", label: "Annual gross sale on site" },
];

// Team data
const team = [
  { img: devansh, name: "Devansh Gupta", role: "Founder & Chairman" },
  { img: samarth, name: "Samarth Upadhay", role: "Managing Director" },
  { img: priyashu, name: "Priyashu Kardam", role: "Product Designer" },
];

// Services data
const services = [
  { img: Services, title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140" },
  { img: headphone, title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support" },
  { img: Tick, title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days" },
];

const About = () => {
  return (
    <div className="w-[90%] mx-auto">

      {/* Our Story Section */}
      <div className="py-12 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="font-semibold text-3xl md:text-4xl mb-4">Our Story</h1>
          <p className="text-gray-700 leading-relaxed">
            We are an innovative e-commerce platform specializing in high-quality electronic products. 
            From cutting-edge gadgets and top-tier appliances to essential accessories, ElectroMart 
            brings you the best in the world of electronics—all at unbeatable prices.
            <br />
            <strong>Shop smart, shop ElectroMart.</strong>
          </p>
          <p className="mt-4 text-gray-700">
            <strong>Why choose ElectroMart?</strong><br />
            ~ Wide Selection: Explore an extensive range of products tailored to meet. <br />
            ~ Quality Assurance: We offer only the best, sourced from trusted brands. <br />
            ~ Seamless Experience: Enjoy a user-friendly interface, secure payment. <br />
            ~ Expert Support: Our team is here to help you make informed decisions and provide post-purchase assistance. <br />
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={ourstory1} alt="ourStory" className="rounded-lg shadow-md w-full md:w-4/5" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-3 py-8 border rounded-lg shadow-md transition-all duration-300 ${
              stat.highlight ? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"
            }`}
          >
            <img src={stat.img} alt={stat.label} className="w-12 h-12" />
            <span className="font-semibold text-2xl md:text-3xl">{stat.value}</span>
            <span className="text-center text-sm md:text-base">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <h2 className="text-2xl font-semibold mt-16 mb-8 text-center">Meet Our Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={member.img} alt={member.name} className="rounded-md w-48 h-64 object-cover" />
            <h3 className="font-semibold text-lg mt-4">{member.name}</h3>
            <span className="text-gray-600 text-sm">{member.role}</span>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 mb-20">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <img src={service.img} alt={service.title} className="w-14 h-14" />
            <h3 className="uppercase font-semibold mt-6 text-sm md:text-base">{service.title}</h3>
            <span className="mt-2 text-gray-600 text-sm">{service.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
