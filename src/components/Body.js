import {useEffect, useState} from "react";
import RestaurantCard, {withVegLabel} from "./RestaurantCard";


import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { body_data_url } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    const [resList,setResList]=useState([]);
    const [dummyData,setDummyData]=useState([])
    const [value,setValue]=useState("")
 
    const isOnline=useOnlineStatus()

    const RestaurantCardVeg= withVegLabel(RestaurantCard)






    useEffect(()=>{
        const fetchData=async()=>{
            const data=await fetch(body_data_url);
            const response=await data.json()
            // console.log(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setResList(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setDummyData(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        };fetchData();
      
                  
    },[]);
   
    if (isOnline===false){
        return(
            <div>
            You seems to be offline please check your internet connection
            </div>
        )
    }

    return resList.length==0?<Shimmer />:(

        <div>
            <div>
                <input type="search" onChange={(e)=>{
                    setValue(e.target.value)
                    console.log(e.target.value)
                }}/>
                <button onClick={()=>{
                    

        const searchData= dummyData.filter(each=>each.info.name.toUpperCase().includes(value.toUpperCase()))
                    // const searchData=dummyData.filter(each=>each.info.name.toLowercase().includes(value.toLowerCase()));
                    setResList(searchData)
                    console.log(searchData)
                }}>search</button>
            </div>
        <div> 
            <button  onClick={()=>{
            const filterData= resList.filter(each=>each.info.avgRating>4.3);
            console.log(filterData)
            setResList(filterData)}}>Top rated Restaurant</button>
      </div>

    

    <div className="flex flex-wrap">
    {resList.map((restaurant) => (
          <Link to={"./restaurants/" + restaurant?.info?.id}>
         { restaurant.info.veg ? (<RestaurantCardVeg resData={restaurant} /> ):( <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)}
          </Link>
        ))}

        



    



    {/* {
        resList.map((each)=> (
        <Link to={"/restaurant/"+each.info.id}><RestaurantCard data={each} key={each.info.id} /> 
        </Link>
        ))} */}

    </div>
    </div>
)
}

export default Body