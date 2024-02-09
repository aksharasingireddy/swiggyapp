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
import { Suspense, lazy } from "react";

const Contact=lazy(()=>import("./components/Contact"))
const Cart=lazy(()=>import("./components/Cart"))


const root=ReactDOM.createRoot(document.getElementById("root"));

const App=()=>{
    return(
        <div>
    <Header />
    <Outlet />

    </div>
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


