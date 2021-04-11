import React, {Fragment} from "react";
import "../styles.css"
import { Link, withRouter } from "react-router-dom"
import { isAuthenticated, signout } from "../auth/authHelper";





const Menu = ({history}) =>{
    
    return(   
        <div className="border-bottom border-top border-light ">
            <ul className="nav mr-auto justify-content-end mt-1 mb-1">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/cart">Cart</Link>
                </li>
                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="user/dashboard">Dashboard</Link>
                    </li>
                )}
                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="admin/dashboard">Admin Dashboard</Link>
                    </li>
                )}
                
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/signin">Signin</Link>
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