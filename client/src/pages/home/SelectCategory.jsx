// import cell from "../../assets/cell.png"
import CategoryCard from "../../components/CategoryCard"
import { categoryData } from "../../data/category.js"

const SelectCategory = () => {
    return (
      <div className="flex flex-col w-[87%] mt-16 mx-auto my-5" >
        <hr />
          <div className="flex items-center mt-10 " >
            <div className="h-5 w-3 rounded-sm bg-red-500 mr-2" ></div>
            <h1 className=" text-red-500 text-sm font-semibold " >Category</h1></div>
          <div className="flex justify-between "> 
              <h1 className="text-3xl font-semibold mt-5" >Browse by category</h1>
              <div>
              <span>{`<`}</span>
              <span>{`>`}</span>
              </div>
               </div >
               <div className="flex items-center justify-center gap-10 mb-10 mt-10" >

               {categoryData.map(card=>(
                   // console.log(card);
                   <CategoryCard key={card.id} categoryData={card} />
                ))}
                </div>
      </div>
    )
  }
  
  export default SelectCategory