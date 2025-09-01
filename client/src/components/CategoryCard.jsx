import React from 'react'

const CategoryCard = ({categoryData}) => {
    // console.log(categoryData);
    
  return (
    <button className='w-40 h-40 border-2 rounded-md py-6 px-4 flex flex-col items-center justify-center hover:invert hover:bg-cyan-400 hover:border-black'>
    <img className='h-12 w-12' src={categoryData.image} alt={categoryData.name} />
    <h1 className='mt-2 text-center'>{categoryData.name}</h1>
</button>

  )
}

export default CategoryCard