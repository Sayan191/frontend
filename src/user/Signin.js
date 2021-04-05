import React, { useState } from "react";
import Base from "../core/Base"
import "./styles.css"
import { Link , Redirect} from "react-router-dom";
import { authenticate, isAuthenticated, signin, isSignedin } from "../auth/authHelper";


const Signin = ({history}) =>{

    const [values, setValues] = useState({
        email:"sayan.hackerone@gmail.com",
        password:"123456789",
        error:"",
        loading:false,
        redirect:false
    })
    const {email,password,error,loading,redirect} = values

    const handleChange = name => events=>{
        setValues({...values, error:false, [name]: events.target.value})
    }

    const onSubmit = e =>{
        e.preventDefault();
        setValues({...values, error:false})
        signin({email,password}).then(data =>{
            console.log(data)
            if(data.error){
                setValues({...values,error:data.error,})
            }
            else{
                authenticate(data, () =>{
                    
                    setValues({
                        email:"",
                        password:"",
                        error:"",
                        loading:true,
                        redirect:true
                    })
                })
            }
        }).catch(error => {
            setValues({...values,error:error,})
        })

    }
    const {user} = isAuthenticated();

    //perform a redirect to dashboard
    const reDirect = () =>{
        if(redirect){
            if(user && user.role === 0){
                return <Redirect to="user/dashboard" />
            }
            else{
                return <Redirect to="admin/dashboard" />
            }
        }
    }
    //checking if user already signed in
    const issignin = () =>{
        if(isSignedin()){
            return history.push("/")
        }
    }

    const  signinForm = () => (
        <div className="row1 ">
            <form>
                <div className="alert alert-success" style={{display: loading ? "" : "none"}}>
                    Logged in Successfully
                </div>
                <div className="alert alert-warning" style={{display: error ? "" : "none"}}>
                    {error}
                </div>
                <div className="input">
                    <input 
                        onChange ={handleChange("email")}
                        type="text" 
                        placeholder="Email"
                        value={email} />
                </div>
                <div className="input">
                    <input 
                        onChange ={handleChange("password")}
                        type="password" 
                        placeholder="Password"
                        value={password} />
                </div>
                <button onClick={onSubmit} className="btn btn-outline-success"><p>Login</p></button>
            </form>
        </div>
    )
    
    const signupbtn = () =>{
        
        return(
            <div className="row1">
                <form >
                    <h3 >Don't have an account!</h3>
                    <Link className="btn btn-outline-success " to="/signup">Signup</Link>
                </form>
            </div>
        )
    }

    return(
        
        <Base className="row mx-auto" title="Signin to your account" onLoad= {issignin()}>
        <div className="col-6 mx-auto">
            {signinForm()}
            {reDirect()}
        </div>
        <div className="col-6 mx-auto">
            {signupbtn()}
        </div>
    </Base>
    )
}
 
export default Signin
