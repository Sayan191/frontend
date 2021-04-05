import React ,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { reAuthenticate, isAuthenticated } from "../auth/authHelper";
import Base from "../core/Base";
import { getUser, updateUser } from "./userDetails/userDetailsHelper";

const UserDetails = ({match,history}) =>{
    const {user,token} = isAuthenticated();
    console.log(user)
    const [values,setValues] = useState({
        name: "",
        phone:"",
        error: "",
        getRedirect: false,
        loading: false,
        success:false,
    })

    const{name,phone,error,getRedirect,loading,success} = values;

    const preload = (userId) => {
        getUser(userId).then(data=>{
          console.log(data)
            if(data == null || data.error){
                setValues({ ...values, error: data.error });
            }
            else
            {
                setValues({
                ...values,
                name:data.name,
                phone:data.phone
            })}
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect( () => {
        preload(match.params.userId)
    },[]);

    const handleChange = name => events=>{
        setValues({...values, error:"", [name]: events.target.value})
    }

    const redirect = () => {
        if(user.role === 1){
            setTimeout(() => { 
                history.push('/admin/dashboard');
            }, 3000)
        }
        else if(user.rle === 0){
            setTimeout(() => { 
                history.push('/user/dashboard');
            }, 3000)
        }
    }

    const onSubmit =e =>{
        e.preventDefault();
        setValues({...values, error:""})
        updateUser(user._id,token,{name,phone,token})
        .then(data => {
            if(data == null){
              setValues({ ...values, error:true })
            }
            else if( data.error){
              setValues({ ...values, error:data.error })
            }
            else{
                setValues({
                  ...values,
                  name:"",
                  phone:"",
                  loading:false,
                  success:true
                })
            redirect();
            }
        })
    }

    const warningMsg = () =>{
      return(
        <div  className="w-50 p-3 border border-danger rounded" style={{ backgroundImage: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)"}} >
          <h6 className="text-muted text-dark lead">You will <span className="font-weight-bold">SignedOut</span> of your account after updating your details due to security issue</h6>
        </div>
      )
    }

    const successMsg = () =>{
        return(
          <div className="alert alert-success mt-3" style={{ display: success ? "" : "none" }}>
              <h4>User updated successfully</h4>
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


    const updateUserForm = () =>{
        return(
          <form>
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
            <input
              onChange={handleChange("phone")}
              type="number"
              className="form-control"
              placeholder="Phone Number"
              value={phone}
            />
          </div>
          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-outline-success my-3">
            Update User
          </button>
        </form>
        )    
    }


    return(
        <Base title="Update Your Products" className="bg-success p-4 my-5">
          {isAuthenticated() && isAuthenticated().user.role === 0 &&(
            <Link className="btn  btn-outline-danger my-2" to="/user/dashboard">Back</Link>
          )}
          {isAuthenticated() && isAuthenticated().user.role === 1 &&(
            <Link className="btn  btn-outline-danger my-2" to="/admin/dashboard">Back</Link>
          )}
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2 mt-3">
                    { successMsg() }
                    { errorMsg() }
                    { updateUserForm() }
                </div>
                <div className="col-md-8 offset-md-4 mt-4 mb-3">
                  {warningMsg()}
                </div>
            </div>
        </Base>
    )
}

export default UserDetails;