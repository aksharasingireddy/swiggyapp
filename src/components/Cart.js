import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/store/cartSlice";

const Cart=()=>{
    const dispatch=useDispatch()
    const handleClearItem=()=>{
        dispatch(clearItem())

    }

    const cartItems=useSelector((store)=>store.cart.items)
    
    return(
        <div className='text-center ali m-5 p-5'>
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className='w-6/12 m-auto'>

     <button className='p-2 m-2 bg-slate-300 text-w rounded-lg' onClick={handleClearItem}>Clear Item</button>
        <ItemList items={cartItems}/>
    </div> 


        </div>
    )
}

export default Cart