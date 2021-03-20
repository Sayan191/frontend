import React ,{useEffect, useState}from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/authHelper";
import  Base  from "../core/Base";
import { AddProduct, allcategory, } from "./adminHelper/index"

const CreateProduct = () =>{
    const{ user, token }=isAuthenticated();
    const [values, setValues] = useState({
        name: "",
        price: "",
        image:"",
        condition:"",
        categories :[],
        category: "",
        error: "",
        createdproduct: "",
        getRedirect: false,
        loading: false,
        success:false,
        formData: ""
    });

    const {name,price,image,categories,condition,category,error,createdproduct,getRedirect,success,loading,formData} = values;
    const preload =() =>{
        allcategory().then(data => {
                if(data.error){
                  setValues({ ...values, error: data.error });
                }else{
                  setValues({ ...values, categories: data, formData:new FormData() });
                }
        }).catch(err =>{
            console.log(err)
        })
    }

    useEffect(()=>{
        preload()
    },[] )

    const handleChange = name => event =>{
        const value = name === "image" ? event.target.files[0] : event.target.value;
        formData.set(name, value)
        setValues({ ...values, [name]: value })
    }

    const onSubmit = e => {
        e.preventDefault();
        setValues({ ...values, error:"", loading:true });
        //backend request
        AddProduct(user._id, token, formData)
        .then(data => {
          if(data.err){
            setValues({ ...values, error:data.err })
          }
          else if(data.Error){
            setValues({ ...values, error:data.Error })
          }
          else if(data.error){
            setValues({ ...values, error:data.error })
          }
          else{
            setValues({
              ...values,
              name:"",
              price:"", 
              image:"",
              condition:"",
              category: "",
              createdproduct: data.name,
              loading:false,
              success:true
            })
          }
        })
    }

    const successMsg = () =>{
        return(
          <div className="alert alert-success mt-3" style={{ display: success ? "" : "none" }}>
              <h4>Product created successfully</h4>
          </div>
        )
    }

    const errorMsg = () =>{
      return(
        <div className="alert alert-warning mt-3" style={{ display: error ? "" : "none" }}>
            <h4> {error }</h4>
        </div>
      )
  }

  const createProductForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group my-1">
        <label>
          <input
            onChange={handleChange("image")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group my-1">
        <input
          onChange={handleChange("name")}
          name="name"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group my-1">
        <textarea
          onChange={handleChange("condition")}
          name="condition"
          className="form-control"
          placeholder="Condition"
          value={condition}
        />
      </div>
      <div className="form-group my-1">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.year}
              </option>
            ))}
        </select>
      </div>
      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success my-3">
        Create Product
      </button>
    </form>
  );

    return(
        <Base title="Create Your Products" className="bg-success p-4 my-5">
            <Link className="btn  btn-outline-danger my-2" to="/admin/dashboard">Home</Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    { successMsg() }
                    { errorMsg() }
                    { createProductForm() }
                </div>
            </div>
        </Base>
    )
}

export  default  CreateProduct;