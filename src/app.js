import Header  from "./components/header";
import Body from "./components/body";
import ReactDOM from "react-dom/client";
import "../app.css"


import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense, lazy, useEffect, useState } from "react";
import UserContext from "./utils/userContext";
import appStore from "./utils/store/appStore";
import {Provider} from "react-redux";

const Contact=lazy(()=>import("./components/Contact"))
const Cart=lazy(()=>import("./components/Cart"))


const root=ReactDOM.createRoot(document.getElementById("root"));


const App=()=>{
    const [userInfo,setUserInfo]=useState()
useEffect(()=>{
    const data={name:"welcome akshara"}
    setUserInfo(data.name)
    
},[])
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{isLoggedInUser:userInfo,setUserInfo}}>
        <div>
        <UserContext.Provider value={{isLoggedInUser:userInfo}}>

    <Header />
    </UserContext.Provider>
    <Outlet />

    </div>
    </UserContext.Provider>
    </Provider> 
    )

}

const appRouter=createBrowserRouter([{
    path:"/",
    element:<App />,
    children:[{
        path:"/",
        element:<Body />
    },
    {
    path:"/about",
    element: <About />
},
    {
    path:"/cart",
    element: <Suspense><Cart /></Suspense>
    },
    {
    path:"/contact", 
    element:<Suspense fallback={<h1>Loading</h1>}><Contact /></Suspense>
},
{
    path:"/restaurant/:id",
    element:<RestaurantMenu />
},
    ],

    errorElement: <Error />

}])

root.render(<RouterProvider router={appRouter} />)

export default App


