import React from "react";
import { useRouteError } from "react-router-dom";

const Error=()=>{
    const errorElement=useRouteError()
    console.log(errorElement);

return(
    <div>
        {/* ErrorResponseImpl */}
        <h1>{errorElement.error.message}</h1>
    </div>

)
}

export default Error