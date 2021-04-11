import React from "react"
import { Link } from "react-router-dom"
import { isAuthenticated } from "../auth/authHelper/index"
import Base from "../core/Base"


const AdminDashboard = () =>{
    
    const { user: {name , email, role, _id} } = isAuthenticated();
    
    const AdminLeftSide = () =>{
        return(
            <div className="card ">
                <h4 className="card-header bg-dark text-white lead">Admin Bar</h4>
                
                <ul className="list-group list-unstyled">
                <li className="list-group-items ">
                        <Link to={`/user/update/${_id}`} className="nav-link text-succeess"> Update user </Link>
                    </li>
                    <li className="list-group-items ">
                        <Link to="/admin/create/category" className="nav-link text-succeess"> Create Category </Link>
                    </li>
                    <li className="list-group-items">
                        <Link to="/admin/manage/categories" className="nav-link text-succeess"> Manage Category </Link>
                    </li>
                    <li className="list-group-items">
                        <Link to="/admin/create/product" className="nav-link text-succeess"> Create Product </Link>
                    </li>
                    <li className="list-group-items">
                        <Link to="/admin/manage/products" className="nav-link text-succeess"> Manage Products </Link>
                    </li>
                    <li className="list-group-items">
                        <Link to="/admin/all/orders" className="nav-link text-succeess"> Manage Orders </Link>
                    </li>
                    <li className="list-group-items">
                        <Link to="/admin/orders" className="nav-link text-succeess"> My Orders </Link>
                    </li>
                </ul>
            </div>
        )
    }
    
    const AdminRightSide = () => {
        return(
            <div className="card mb-4 ">
                <h4 className="card-header bg-dark text-white lead">Info Panel</h4>
                <li className="list-group-item  bg-dark">
                <span className="lead "><span className="badge badge-warning text-info">You are an Admin</span></span>
                </li>
                <ul className="list-group list-unstyled">
                    <li className="list-group-item  bg-dark">
                        <span className="badge display-3 badge-success">Name: {name}</span>
                    </li>
                    <li className="list-group-item  bg-dark">
                        <span className="badge display-3 badge-success">Email: {email}</span>
                    </li>
                </ul>
            </div>
        )
    }

    return(
        <Base title="Admin Dashboard" description= "Manage Your Account" >
            <div className="row ">
                <div className="col-3">{AdminLeftSide()}</div>
                <div className="col-9">{AdminRightSide()}</div>
            </div>
        </Base>
    )               
}

export default AdminDashboard;