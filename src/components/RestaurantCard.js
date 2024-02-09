import React from "react";

// const url="media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";


const RestaurantCard=(props)=>{
    const {name,cloudinaryImageId,cuisines,costForTwo,sla,avgRating}=props.resData.info
    console.log(props)
    
    return(
        <div className=" h-[350px] w-[250px] rounded-xl bg-gray-200 p-4 m-4 hover:bg-blue-200">
            <img src={url+cloudinaryImageId} className="w-full h-[150px] border-r-4" />
            <h1 className=" font-bold">{name}</h1>
            <h3>{avgRating} rating</h3>
            <p>{sla.deliveryTime} minutes</p>
            <p> {costForTwo}  rupees</p>
            <p>{cuisines.join(", ").slice("")}</p>
            
        </div>
    )
}

export const withVegLabel= (RestaurantCard)=>{
    return (props)=>{
      
        return(
            <div>
            <label className="absolute bg-green-400 text-black m-2 p-2 rounded-lg">Veg</label>
            <RestaurantCard {...props}/>

            </div>
            
        )
    }
}







export default RestaurantCard






