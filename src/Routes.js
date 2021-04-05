import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import CreateCategory from "./admin/CreateCategory"
import CreateProduct from "./admin/CreateProduct"
import AdminRoute from "./auth/authHelper/AdminRoute"
import PrivateRoute from "./auth/authHelper/PrivateRoute"
import Home from "../src/core/Home"
import AdminDashboard from "./user/AdminDashboard"
import Signin from "./user/Signin"
import Signup from "./user/Signup"
import UserDashboard from "./user/UserDashboard"
import ManageCategory from "./admin/ManageCategory";
import ManageProduct from "./admin/ManageProducts"
import UpdateCategory from "./admin/UpdateCategoy"
import UpdateProduct from "./admin/UpdateProduct"
import Products from "./core/Products"
import Cart from "./core/Cart"
import UserDetails from "./userDetails/UserDetails"


const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/products" exact component={Products}/>
                <Route path="/cart" exact component={Cart}/>
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                <PrivateRoute path="/user/update/:userId" exact component={UserDetails}/>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                <AdminRoute path="/admin/create/category" exact component={CreateCategory}/>
                <AdminRoute path="/admin/create/product" exact component={CreateProduct}/>
                <AdminRoute path="/admin/manage/categories" exact component={ManageCategory}/>
                <AdminRoute path="/admin/manage/products" exact component={ManageProduct}/>
                <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory}/>
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct}/>
            </Switch>
        </Router>
    )
}

export default Routes;
