import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HOme from "./core/HOme"
import Signin from "./user/Signin"
import Signup from "./user/Signup"


const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={HOme}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
            </Switch>
        </Router>
    )
}

export default Routes;