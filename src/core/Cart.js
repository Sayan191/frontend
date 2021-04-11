import React, { useEffect, useState } from "react";
import "../styles.css"
import Base from "./Base"
import Card from "./Card";
import { loadCart } from "./coreHelper/cartHelper";


const Cart = () =>{

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(()=> {
        setProducts(loadCart())
    },[reload])

    const loadAllProduct = (products) =>{
        return(
            <div >
                <h2 className ="mb-5 text-light "><u>{products.length} products in your Cart</u></h2>
                <div className="grid grid-cols-2 ">
                    {products.map((product,index) => {
                        return(
                            <Card 
                            key = {index}
                            product={product}
                            addtoCart= {false}
                            removefromCart={true}
                            setReload={setReload}
                            reload={reload}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }

    return(
        <Base description ="Items in your Cart" title="Cart Page" className="mb-2">
            <div className="row text-center mt-4">
                {products && products.length>0 && (<div className="col-8 mx-auto ">{loadAllProduct(products)}</div>)}
                {!products && (<div className="col-8 mx-auto text-light display-4"><h3>No products in the cart</h3></div>)}
                <div className="col-4"><h2 className="lead text-light"><u>Payment method will added soon..</u></h2></div>
            </div>
        </Base>
    )
}

export default Cart;