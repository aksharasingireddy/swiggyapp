import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data,showItem,showIndex}) => {
  // const [showItem,setShowItem]=useState(false)
    console.log(data)

    const handleItems=()=>{
      showIndex()
      // setShowItem(!showItem)
    }
  return (
    <div className="w-6/12 m-auto my-2 shadow-lg flex justify-between p-4 bg-gray-50" onClick={handleItems}>
        <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
      {showItem?<span>⬆️</span>: <span>⬇️ </span>}
        {showItem && <ItemList items={data.itemCards} />}

       
    </div>
  )
}






export default RestaurantCategory