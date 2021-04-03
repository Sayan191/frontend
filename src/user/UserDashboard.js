import React from "react"
import { Link } from "react-router-dom"
import { isAuthenticated } from "../auth/authHelper";
import Base from "../core/Base";


const UserDashboard = () =>{
    
    const {user: {name,email} } = isAuthenticated();

    const userLeftSide = () =>{
        return(
            <div className="card" >
                <h4 className="card-header bg-dark text-white lead">User </h4>
                <div>
                <ul className="list-group list-unstyled">
                    <li className="list-group-items">
                        <Link to="/user/orders" className="nav-link text-succeess"> My orders </Link>
                    </li>
                    <li className="list-group-items">
                        <Link to="/user/chats" className="nav-link text-succeess"> My chats </Link>
                    </li>
                    <li className="list-group-items">
                        <Link to="/user/notification" className="nav-link text-succeess"> My notifications </Link>
                    </li>
                </ul>
                </div>
            </div>
        )
    }

    const userRightSide = () =>{
        return(
            <div className="card mb-4 " >
                <h4 className="card-header bg-dark text-white lead">Info Panel</h4>
                <li className="list-group-item  bg-dark">
                <span className="lead "><span className="badge badge-warning">User Details</span></span>
                    </li>
                <ul className="list-group list-unstyled">
                    <li className="list-group-item  bg-success">
                        <span className="badge display-2">Name: {name}</span>
                    </li>
                    <li className="list-group-item  bg-success">
                        <span className="badge display-2">Email: {email}</span>
                    </li>
                </ul>
            </div>
        )
    }
    return (
        <Base title="User Dashboard">
            <div className="row">
                <div className="col-3">{userLeftSide()}</div>
                <div className="col-9">{userRightSide()}</div>
            </div>
        </Base>
    )
}

export default UserDashboard;