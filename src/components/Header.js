import {Link} from "react-router-dom"
import { logo_url } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"
import { useContext } from "react"
import UserContext from "../utils/userContext"
import { useSelector } from "react-redux"

const Header=()=>{

    const isOnline=useOnlineStatus()
    const {isLoggedInUser}=useContext(UserContext)

    const cartItems= useSelector((store)=>store.cart.items)
    // console.log(cartItems)


    // const cartItems=useSelector((store)=>store.cart.items)

    return(
        <div className="flex justify-between bg-red-300 shadow-lg">
            <img className="w-32 rounded-xl" src={logo_url} />
            <ul className="p-4 m-4">
                <li>{isLoggedInUser}</li>
                <li className="px-4">Online Status :{isOnline?"🟢":"🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About</Link></li>
                <li className="px-4"><Link to="/contact">Contact</Link></li>
                <li className="px-4"><Link to="/cart">Cart - {cartItems.length} items</Link></li>
            </ul>
        </div>
    )
}


export default Header