import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { addToItemCart, removeItemFromCart } from "./coreHelper/cartHelper";
import ImageHelper from "./coreHelper/imageHelper";


const Card = ({product , addtoCart= true, removefromCart= false, setReload= f => f, reload= undefined}) =>{
    const cardTitle = product ? product.name : "A photo of T"
    const cardCondition = product ? product.condition : "Default"
    const cardPrice = product ? product.price : "Default"

    const [redirect, setRedirect] = useState(false)
    //const [count, setCount] = useState(product.count)

    const addToCart = () => {
        addToItemCart(product , ()=> setRedirect(true))
    }

    const showaddtoCart = (addtoCart) => {
        return(
          addtoCart && (
            <button
            onClick={addToCart}
            className="btn btn-block btn-outline-success mt-2 mb-2"
            >
              Add to Cart
            </button>
          )
        )
    }

    const showaremovefromCart = (removefromCart) => {
        return(
          removefromCart && (
            <button
            onClick={() => {
              removeItemFromCart(product._id)
              setReload(!reload)
            }}
            className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
              Remove from cart
            </button>
          )
        )
    }

    const getRedirecct = (redirect) => {
        if(redirect){
          return <Redirect to="/cart" />
        }
    }

    return (
        <div className="card text-white bg-dark border border-info rounded mt-3" style={{height:"450px",width:"350px"}}>
          <div className="card-header lead">{cardTitle}</div>
          <div className="card-body text-center">
          {getRedirecct(redirect)}
            <ImageHelper product= {product} />
            <p className="btn btn-success rounded px-4 mt-3">Rs. {cardPrice}</p>
            <div className="row ">
              <div className="col-12">
                {showaddtoCart(addtoCart)}
              </div>
              <div className="col-12">
                {showaremovefromCart(removefromCart)}
              </div>
            </div>
          </div>
        </div>
    )
}

export default Card;