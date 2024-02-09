import { useEffect, useState } from "react"
import { menu_url } from "./constants" 

const useRestaurantMenu=(id)=>{
    const [resMenu,setResMenu]=useState(null)
    useEffect(()=>{
        const menu=async()=>{
        
        data=await fetch(menu_url+id)
        const response=await data.json()
        setResMenu(response)
        }

        menu()

    },[])

    return resMenu
}



export default useRestaurantMenu




