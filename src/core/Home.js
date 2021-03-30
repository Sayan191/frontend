import { React, useState } from "react";
import Base from "./Base"

const Home = () =>{


    return(
        <Base title="Welcome" description="Still in Costruction.. Please go to products page..">
            <div className="row text-dark ">
                <div className="col-md-3 ">
                    <h1 className="text-center bg-dark text-light">Side</h1>
                </div>
                <div className="col-md-6">
                    <h1 className="text-center bg-light text-dark">Main</h1>
                </div>
                <div className="col-md-3">
                    <h1 className="text-center bg-dark text-light">Side</h1>
                </div>
                
            </div>
        </Base>
    ) 
}


export default Home;