import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/authHelper/index";
import { allcategory, deleteCategory } from "./adminHelper/index";
import { Button } from "@material-ui/core";

const ManageCategory =() =>{

    const [category,setCategory] = useState([])
    const {user, token} = isAuthenticated();

    const preload = () =>{
        allcategory().then(data => {
            if(data.error){
                console.log(data.error);
             }else{
                  setCategory(data);
              }
              console.log(category)
        })
    }

    useEffect (()=>{
        preload()
    },[]);

    //deleting category function
    const deleteCate = CategoryId =>{
        deleteCategory(user._id,token,CategoryId).then(data =>{
            preload()
        }).catch(err => console.log(err)) 
    }

    return(
        <Base title="Welcome admin" description="Manage categories here">
            <Link className="btn btn-warning" to={`/admin/dashboard`}>
                <span className="text-light">Admin Home</span>
            </Link>
            <h2 className="mb-4">All Categories:</h2>
            <div className="row">
                <div className="col-12">
                {!category.length && (<h2 className="text-center text-warning py-4">No category found</h2>)}
                {category.length>0 && (<h2 className="text-center text-warning py-4">Total {category.length} Categories</h2>)}
                    {
                        category.length>0 && category.map( (category, index) => { 
                            return(
                                <div className="border border-light mb-2 ">
                                    <div key ={index} className="row text-center mb-2 mt-2">
                                        <div className="col-4">
                                            <h3 className="text-left">Year {category.year}</h3>
                                        </div>
                                        <div className="col-4">
                                        <Link
                                            className="btn btn-success"
                                            to={`/admin/category/update/${category._id}`}
                                        >
                                            <span className="text-warning">Update</span>
                                        </Link>
                                        </div>
                                        <div className="col-4">
                                            <button onClick={() => {deleteCate(category._id)}} className="btn btn-danger text-light">
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

export default ManageCategory;