import React, { useEffect, useState } from "react"
import Base from "../core/Base"
import { Link} from "react-router-dom";
import { isAuthenticated } from "../auth/authHelper";
import { allcategory,getaProduct,updateProducts } from "./adminHelper";


const UpdateProduct = ({match,history}) =>{
    const {user,token} = isAuthenticated();
    const [values,setValues] = useState({
        name: "",
        price: "",
        condition:"",
        categories :[],
        category: "",
        error: "",
        updatedproduct: "",
        getRedirect: false,
        loading: false,
        success:false,
        formData: ""
    })

    const{name,price,image,condition,categories,category,error,updatedproduct,getRedirect,loading,success,formData} = values;

    const preload = (productId) => {
      getaProduct(productId).then(data => {
        console.log(data)
            preloadCategories();
            setValues({
              ...values,
              name: data.name,
              condition: data.condition,
              price: data.price,
              category: data.category._id,
              formData: new FormData()
            });
      }).catch(err =>{
        console.log(err)
        setValues({ ...values, error: err });
      })
    };


    const preloadCategories = () =>{
        allcategory().then(data => {
            setValues({ categories: data, formData:new FormData()}) 
          }).catch(err => {
            console.log(err)
          });
    }

    useEffect( () => {
      preload(match.params.productId)
    }, []);

    const handleChange = name => event =>{
        const value = name === "image" ? event.target.files[0] : event.target.value;
        formData.set(name, value)
        setValues({ ...values, [name]: value })
    }

    const redirect = () => {
      setTimeout(() => { 
          history.push('/admin/manage/products');
      }, 4000)
    }

    const onSubmit = e => {
      e.preventDefault();
      setValues({ ...values, error:"", loading:true });
     
      //backend request
      updateProducts(match.params.productId, user._id, token, formData)
      .then(data => {
        if(data.err ){
          setValues({ ...values,  error:data.err })
        }
        else if(data.error){
          setValues({ ...values, error:data.error })
        }
        else{
          setValues({
            ...values,
            name:"",
            condition:"", 
            price:"", 
            image:"",
            updatedproduct: data.name,
            loading:false,
          })
          redirect();
        }
      })
  }

    const successMsg = () =>{
        return(
          <div className="alert alert-success mt-3" style={{ display: updatedproduct ? "" : "none" }}>
              <h4 className="text-dark">Product updated successfully</h4>
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

    const updateProductForm = () => (
        <form>
          <div className="form-group my-1 text-light">
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
            Update Product
          </button>
        </form>
      );

      return(
        <Base title="Update Your Products" className="bg-success p-4 my-5">
            <Link className="btn  btn-outline-danger my-2" to="/admin/dashboard">Home</Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2 mt-3">
                    { successMsg() }
                    { errorMsg() }
                    { updateProductForm() }
                </div>
            </div>
        </Base>
    )
}

export default UpdateProduct;

