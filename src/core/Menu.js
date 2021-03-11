import React, {Fragment} from "react";
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
    
    return(   
        <div>
            <ul className="nav text-success mr-auto justify-content-end">
                <li className="nav-item">
                    <Link style ={currentTab(history, "/")} className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link style ={currentTab(history, "/products")} className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link style ={currentTab(history, "/cart")} className="nav-link" to="/cart">Cart</Link>
                </li>
                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                        <Link style ={currentTab(history, "user/dashboard")} className="nav-link" to="user/dashboard">Dashboard</Link>
                    </li>
                )}
                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item">
                        <Link style ={currentTab(history, "admin/dashboard")} className="nav-link" to="admin/dashboard">Admin Dashboard</Link>
                    </li>
                )}
                
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link style ={currentTab(history, "/signup")} className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link style ={currentTab(history, "/signin")} className="nav-link" to="/signin">Signin</Link>
                        </li>
                    </Fragment>
                )}
                {isAuthenticated() && (
                    <li className="nav-item">
                        <Link className="nav-link text-warning" >
                            <span 
                                onClick={()=>{
                                    signout(()=>{
                                        history.push("/")
                                    })
                            }}>
                                SignOut
                            </span>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default withRouter(Menu)