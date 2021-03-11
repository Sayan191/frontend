import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import CreateCategory from "./admin/CreateCategory"
import CreateProduct from "./admin/CreateProduct"
import AdminRoute from "./auth/authHelper/AdminRoute"
import PrivateRoute from "./auth/authHelper/PrivateRoute"
import HOme from "./core/HOme"
import AdminDashboard from "./user/AdminDashboard"
import Signin from "./user/Signin"
import Signup from "./user/Signup"
import UserDashboard from "./user/UserDashboard"



const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={HOme}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                <AdminRoute path="/admin/create/category" exact component={CreateCategory}/>
                <AdminRoute path="/admin/create/product" exact component={CreateProduct}/>
            </Switch>
        </Router>
    )
}

export default Routes;