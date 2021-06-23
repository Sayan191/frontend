import React from "react"
import "../styles.css"
import Menu from "./Menu"
//const googleAdId = 'ca-pub-yourGoogleAdId'

const Base = ({
    title="e-Stationary",
    description="",
    className=" py-4",
    children=""
    
}) =>(
    <div>
        <nav className="navbar-brand text-light text-center mb-0 h1">ICES</nav>
        <Menu />
        <div className="container-fluid">
            <div className=" jumbotron text-light text-center">
                <h2 className="display-4 text-light">{title}</h2>
                <p className="text-sm text-light lead">{description}</p>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
   
        <footer className="mt-4 footer ">
            <div className="container-fluid bg-success dark text-center py-3">
                <h4 className="lead">Feel free to ask any query</h4>
                <button className="btn btn-warning btn-md py-1">Contact Us</button>
            </div>
            <div className="container">
                <span className="text-muted">
                    <span className="text-light">ICES</span>
                </span>
            </div>
        </footer>
    </div>
)

export default Base;