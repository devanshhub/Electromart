import ProductBanner from "../../components/ProductBanner"
import { Link } from 'react-router-dom';

// The Hero component, with the static image replaced by the interactive banner.
const Hero = () => {
  return (
    <div className="flex justify-center h-120 mb-5">
      <div className="w-full bg-white p-8">
         <ProductBanner/>
      </div>
    </div>
  )
}

export default Hero;