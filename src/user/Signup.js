import React, { useState } from "react";
import Base from "../core/Base"
import "./styles.css"
import { Link , Redirect} from "react-router-dom";
import { signup, isSignedin } from "../auth/authHelper";


const Signup = ({history}) =>{
    const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    })

    const {name,email,password,error,success} = values

    const handleChange = name => events=>{
        setValues({...values, error:false, [name]: events.target.value})
    }

    const onSubmit = e =>{
        e.preventDefault();
        setValues({...values, error:""})
        signup({name,email,password}).then(data =>{
            if(data.error){
                setValues({...values,error:data.error,success:false})
            }
            else{
                setValues({
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true
                })
            }
        }).catch(error =>{
            console.log(error)
        });
    }

    //checking if user already signed in
    const issignin = () =>{
        if(isSignedin()){
            return history.push("/")
        }
    }

    const signupForm= () =>(
        <div className="row1">
            <form>
                <div className="alert alert-success" style={{display: success ? "" : "none"}}>
                    Account Created. Click here to <Link to="/signin" >Login</Link>
                </div>
                <div className="alert alert-warning" style={{display: error ? "" : "none"}}>
                    {error}
                </div>
                <div className="input">
                    <input 
                        onChange={handleChange("email")}
                        type="text" 
                        placeholder="Email"
                        value={email} />
                </div>
                <div className="input">
                    <input
                        onChange={handleChange("name")} 
                        type="text" 
                        placeholder="Name"
                        value={name} />
                </div>
                <div className="input">
                    <input
                        onChange={handleChange("password")} 
                        type="password" 
                        placeholder="Password"
                        value={password} />
                </div>
                <button onClick={onSubmit} className="btn btn-outline-success btn-"><p>Signup</p></button>
            </form>
        </div>
    )

    const loginbtn = () =>{ 
        return(
            <div className="row1">
                <form>
                    <h3>Already have an account!</h3>
                    <Link className="btn btn-outline-success " to="/signin">Signin</Link>
                </form>
            </div>
        )
    }


    return(
        <Base className="row mx-auto" title="Signup to new account" onLoad= {issignin()}>
            <div className="col-6 mx-auto">
                {signupForm()}
                
            </div>
            <div className="col-6 mx-auto">
                {loginbtn()}
            </div>
        </Base>
    )
}
 
export default Signup