import { React, useState } from "react";
import Base from "./Base"

const Home = () =>{

    return(
        <Base title="Welcome" className="text-light" description="Still in Costruction.. Please go to products page..">
            <div className="row">
                <div className="col-md-3 ">
                    <h1 className="text-center text-light">Side</h1>
                </div>
                <div className="col-md-6">
                    <h1 className="text-center text-dark">Main</h1>
                </div>
                <div className="col-md-3">
                    <h1 className="text-center text-light">Side</h1>
                </div>
                
            </div>
        </Base>
    ) 
}


export default Home;