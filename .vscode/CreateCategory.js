import React ,{useState}from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/authHelper";
import  Base  from "../core/Base";
import {AddCategory} from "./adminHelper/index"

const CreateCategory = () =>{
    const [year,setYear] = useState("")
    const [error,setError] =useState(false)
    const [success,setSuccess]=useState(false)
    const {user,token} = isAuthenticated();

    
    const handleChange = event=> (
        setError(""),
        setYear(event.target.value)
    )

    const onSubmit = e =>{
        e.preventDefault()
        setSuccess(false)
        AddCategory(user._id,token,{year})
            .then( data =>{
                if(data == null || data.error){
                    setError(true)
                }
                else if(data.err){
                    setError(true)
                }
                else{
                    setError("")
                    setSuccess(true)
                    setYear("")
                }
            })
            .catch(err=>{
                console.log(err)
            })
        
    }

    const successMsg = () =>{
        if (success){
            return <h4 className="text-success">Category Created Successfully</h4>
        }
    }

    const warningMsg = () =>{
        if (error){
            return <h4 className="text-warninig">Unable to Create Category</h4>
        }
    }

    const myCategoryForm = () =>{
        return(
            <form>
                <div className="form-group">
                    <h3 className="lead card-header">Add Year wise Category<span className="text-muted">(in number)</span></h3>
                    <input 
                        onChange={handleChange} 
                        value={year}
                        className="form-control my-3" 
                        type="text" 
                        autoFocus required placeholder="For Ex. : 4"/>
                    <button onClick={onSubmit} className="btn btn-outline-info">Create</button> 
                </div>
            </form>
        )
    }

    const goBack = () =>{
        return (
            <div>
                <Link className="btn  btn-outline-danger" to="/admin/dashboard">Home</Link>
            </div>
        )
    }

    return (
        <Base title="Add Category" className="container bg-success p-4 my-5">
            <div className="row bg-white rounded my-4">
                <div className="col-md-8 offset-md-2" >
                    {successMsg()}
                    {warningMsg()}
                    {myCategoryForm()}
                    <div className="my-2">
                        {goBack()}
                    </div>
                </div>
            </div>
        </Base>
    )
         
}

export default CreateCategory