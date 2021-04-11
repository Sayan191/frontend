import React, {useEffect , useState } from "react";
import Base from "./Base"
import { getProducts } from "./coreHelper/productHelper";
import Card from "./Card";

const Products = () =>{

    const[products,setProduct]=useState([])
    const[error,setError] = useState(false)

    const loadAllProducts = ()=>{
        getProducts().then(data=>{
            console.log(data)
            if(data.err){
                setError(data.err)
            }
            else{
                setProduct(data)
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
        loadAllProducts();
    }, []);
    
    return(
        <Base title="Products around" className="mb-2">
            <div className="row">
                <div className=" grid grid-cols-3 gap-3">
                        {
                            products && products.map((product, index)=> {
                                return(
                                    <div key={index} >
                                        <Card product ={product}/>
                                    </div>
                                )
                            })  
                        }
                </div>
            </div>
        </Base>
    ) 
}


export default Products