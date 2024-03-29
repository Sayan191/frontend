import React from "react"
import { API } from "../../backend"


const ImageHelper = ( {product} ) =>{

    const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
    return (
        <div className="rounded border border-success p-2">
            <img
              src={imageurl}
              alt="photo"
              style={{ height: "200px", width: "300px"}}
              className="mb-3 rounded hover-shadow w-100"
            />
        </div>
    )
}

export default ImageHelper;