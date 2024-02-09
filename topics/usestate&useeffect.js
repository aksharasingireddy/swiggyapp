import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom/client";

const root=ReactDOM.createRoot(document.getElementById("root"));

const Myage=()=>{

    const [count,setCount]=useState(10)
    const [age,setAge]=useState(5)


    // useEffect(()=>{
    //     setTimeout(()=>{
    //     setCount((count)=>count+1);
    // },1000);},[]);


return(   
  //  <h1>I renderd {count} times</h1>


    <div>

        <h1>My age is {age}</h1>
        <button onClick={()=>setAge(45)}>sunitha age</button>
    
    </div>
// 
)
}

root.render(<Myage />)





// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter />);

              
