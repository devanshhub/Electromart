

import { cardData } from "../data/product.js"
import { Link } from "react-router-dom"
import Card from "../components/Card"

const Productslider = () => {
  return (
    <><div className="flex flex-col w-[87%]  mx-auto my-5" >
    <div className="flex items-center mt-6 " >
      <div className="h-5 w-3 rounded-sm bg-red-500 mr-2" ></div>
      <h1 className=" text-red-500 text-sm font-semibold " >Today's</h1></div>
    <div className="flex justify-between ">
      <h1 className="text-3xl font-semibold mt-5" >Flash sale</h1>
      <div>
        <span>{`<`}</span>
        <span>{`>`}</span>
      </div>
    </div >
  </div >
  <div className="flex w-[87%]  mx-auto justify-center items-center flex-col" >
    <div style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} className="flex gap-5 w-[100%]   overflow-x-auto items-center mt-5 justify-start">
      {cardData.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
    <Link to="/allproducts" className="mt-20 bg-red-500 rounded hover:bg-red-600 border text-white py-2 px-4" >View all Products</Link>
  </div></>
  )
}

export default Productslider