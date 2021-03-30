import React from "react"
import "../styles.css"
import Menu from "./Menu"
import PageLoader from "./Loader"

const Base = ({
    title="e-Stationary",
    description="",
    className=" py-4",
    children=""
}) =>(
    <div>
        <nav className="navbar-brand text-center mb-0 h1">ICES</nav>
        <Menu />
        <div className="container-fluid">
            <div className=" jumbotron text-light text-center">
                <h2 className="display-4 text-dark">{title}</h2>
                <p className="text-sm lead text-dark">{description}</p>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
        <footer className="mt-auto footer ">
            <div className="container-fluid bg-success text-white text-center py-3">
                <h4 className="lead">Feel free to ask any query</h4>
                <button className="btn btn-warning btn-md py-1">Contact Us</button>
            </div>
            <div className="container">
                <span className="text-muted">
                    <span className="text-white">ICES</span>
                </span>
            </div>
        </footer>
    </div>
)

export default Base;