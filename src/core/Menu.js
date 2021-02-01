import React from "react";
import "../styles.css"
import { Link, withRouter } from "react-router-dom"
import { isAuthenticated, signout } from "../auth/authHelper";


const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return{color:"#ffffff"}
    }
    else{
        return{color: "green"}
    }
}


const Menu = ({history}) =>{
    const {user} = isAuthenticated()
    return(   
        <div>
            <ul className="nav nav-tabs text-success bg-dark mr-auto">
                <li className="nav-item">
                    <Link style ={currentTab(history, "/")} className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link style ={currentTab(history, "/products")} className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link style ={currentTab(history, "user/dashboard")} className="nav-link" to="user/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link style ={currentTab(history, "admin/dashboard")} className="nav-link" to="admin/dashboard">Admin Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link style ={currentTab(history, "/signup")} className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                    <Link style ={currentTab(history, "/signin")} className="nav-link" to="/signin">Signin</Link>
                </li>
                <li className="nav-item">
                    <span className="nav-link text-warning"
                        onClick={()=>{
                            signout(()=>{
                                history.push("/")
                            })
                    }}>
                        SignOut
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Menu)