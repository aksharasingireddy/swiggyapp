


// const headel=React.createElement("h1", {id:"heading"}, "welcome to React") //object
// console.log(headel)
//  const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(headel)


// const heading = React.createElement("h1", {id:"heading"}, "Hello Welcome to React") //object


// console.log(heading)
//JSX
// // root.render(heading)

// const Heading=()=>{
//     return(
//         <h1>Welcome to Jsx</h1>
//     )
// }

// root.render(<Heading />)

// const App=()=>{
//     return(
//         <div>
//     <Header />
//     <Body />

//     </div>
//     )

// }


// const Header=()=>{
//     return(
//         <div className="header-container">
//             <img className="logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?size=626&ext=jpg&ga=GA1.1.1119477202.1695989009&semt=ais" />
//             <ul className="nav-items">
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//                 <li>Cart</li>
//             </ul>
//         </div>
//     )
// }


// const url="media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
// const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

// const RestaurantCard=(props)=>{
//     const {name,cloudinaryImageId,cuisines,costForTwo,deliveryTime,avgRating}=props.data
//     console.log(props)
    
//     return(
//         <div className="res-card">
//             <img src={url+cloudinaryImageId} className="res-logo" />
//             <h1>{name}</h1>
//             <h3>{avgRating} rating</h3>
//             <p>{deliveryTime} minutes</p>
//             <p> {costForTwo/100}  rupees</p>
//             <p>{cuisines[0]}</p>
            
//         </div>
//     )
// }

// const resList=[
//     {
//        data: {    
//             id : "334475",
//             name: "paradise",
//             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTime : 36,
//             avgRating : "3.8"
//         }
//     },
//     {
//         data: {    
//             id : "334476",
//             name: "Eat panchavat",
//             cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTime : 20,
//             avgRating : "4.3"
//         }
//     },
//     {
//         data: {    
//             id : "334477",
//             name: "Dominos",
//             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTime : 40,
//             avgRating : "4.4"
//         }
//     },
//     {
//         data: {    
//             id : "334478",
//             name: "kritunga",
//             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTime : 40,
//             avgRating : "3.9"
//         }
//     },
//     {
//         data: {    
//             id : "334479",
//             name: "Suprabhat",
//             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTime : 40,
//             avgRating : "3.5"
//         }
//     }]




// const Body=()=>{
//     const [resList,setResList]=useState([])


//     useEffect(()=>{
//         const fetchData=async()=>{
//             const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//             const response=await data.json()
//             console.log(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
//             setResList(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
//         };fetchData();
      
                  
//     },[]);


//     return(
//     <div className="body">
//     {
//     resList.map(each=> <RestaurantCard data={each} /> )
// }
//     </div>
// )
// }


// root.render(<App />)






