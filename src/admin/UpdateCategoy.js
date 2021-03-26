import React, { useEffect, useState } from "react"
import Base from "../core/Base"
import { Link} from "react-router-dom";
import { isAuthenticated } from "../auth/authHelper";
import { updateCate,getaCategory } from "./adminHelper";




const UpdateCategory = ({match, history}) =>{

    const [year, setYear] =useState("");
    const [error, setError] =useState(false);
    const [success, setsuccess] =useState(false);
    const { user, token } = isAuthenticated();

    const handleChange = event =>{
        setError("")
        setYear(event.target.value)
    }

    const preload = (categoryId) =>{
        getaCategory(categoryId).then(data => {
                setYear(data.year)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect( ()=>{
        preload(match.params.categoryId);
    }, [] );

    //onSubmit func
    const onSubmit = e => {
        e.preventDefault()
        setError("")
        setsuccess(false)
        
        //backend reqeust
        console.log(match.params.categoryId)
        updateCate(match.params.categoryId, user._id, token, {year})
            .then(data => {
                if(data.Error){
                    setError(true)
                }else{
                    setError("")
                    setsuccess(true)
                    setYear("")
                    redirect();
                }
            }).catch(err => {console.log(err)})
    }

    //redirecting function
    const redirect = () => {
        setTimeout(() => {
            history.push('/admin/manage/categories');
        }, 4000)
    }

    //if updated func
    const successMsg = () =>{
        if (success){ 
            return (
                <h4 className="text-success lead">Category Updated  Successfully... Redirecting...</h4>
            )
            
        }
    }

    //if not updated func
    const warningMsg = () =>{
        if (error){
            return <h4 className="text-warniing lead">Unable to Update Category</h4>
        }
    }

    //render function
    const UpdateForm = () =>{
        return(
            <form>
                <div className="form-group">
                    <h3 className="lead card-header mb-3">Update Category Year</h3>
                    <input onChange={handleChange} value={year}className="form-control my-3 mb-3" type="text" autoFocus required/>
                    <button onClick={onSubmit} className="btn btn-outline-info mb-3 text-dark">Update</button> 
                </div>
            </form>
        )
    }

    const goBack = () =>{
        return (
            <div>
                <Link className="btn btn-danger mb-3 text-dark" to="/admin/dashboard">Home</Link>
            </div>
        )
    }

    return (
        <Base title="Update Category" className="container bg-success p-4 mb-3">
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2" >
                    {successMsg()}
                    {warningMsg()}
                    {UpdateForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    )
}

export default UpdateCategory;