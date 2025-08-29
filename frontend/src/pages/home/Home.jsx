
import Hero from "./Hero"
import SelectCategory from "./SelectCategory"
import Productslider from "../../components/Productslider"



function Home() {
  // console.log(cardData);

  return (
    <>
      <Hero/>
      
      <Productslider/>
      <SelectCategory />
    </>
  )
}

export default Home