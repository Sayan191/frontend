import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/authHelper/index";
import Base from "../core/Base"
import { allProduct,deleteProd } from "./adminHelper";

const ManageProduct = () =>{
    const [products, setProducts] =useState([]);
    const {user, token} = isAuthenticated();

    const preload = () =>{
        allProduct().then(data=>{
            if(data.error){
                console.log(data.error);
              }else{
                  setProducts(data);
              }
        })
    }

    useEffect( () => {
        preload();
    }, []);

    const deleteProduct =(ProductId) =>{
        deleteProd (user._id,token,ProductId).then(data=>{
            preload()
        }).catch(err=>console.log(err))
    }

    return (
        <Base title="Welcome admin" description="Manage products here">
            <Link className="btn btn-warning" to={`/admin/dashboard`}>
                <span className="">Admin Home</span>
            </Link>
            <h2 className="mb-3 mt-2">All products:</h2>
            <div className="row">
                
                <div className="col-12">
                    {!products.length && (<h2 className="text-center text-dark py-4">No products found</h2>)}
                    {products.length>0 && (<h2 className="text-center text-dark py-4">Total {products.length} products</h2>)}
                    {
                        products.map( (product, index) => {
                            return(
                                <div className="border border-dark mb-2 ">
                                    <div key ={index} className="row text-center mb-2 mt-2">
                                        <div className="col-4">
                                            <h3 className="text-left">{product.name}</h3>
                                        </div>
                                        <div className="col-4">
                                        <Link
                                            className="btn btn-success"
                                            to={`/admin/product/update/${product._id}`} >
                                            <span className="text-dark">Update</span>
                                        </Link>
                                        </div>
                                        <div className="col-4">
                                            <button onClick={() => {deleteProduct(product._id)}} className="btn btn-danger text-dark">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </Base>
    )
}   

export default ManageProduct;