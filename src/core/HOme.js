import { React } from "react";
import Base from "./Base"

const HOme = () =>{
    return(
        <Base title="Welcome" >
            <div className="row text-dark ">
                <div className="col-md-3 ">
                    <h1 className="text-center bg-danger">Side</h1>
                </div>
                <div className="col-md-6">
                    <h1 className="text-center bg-warning">Main</h1>
                </div>
                <div className="col-md-3">
                    <h1 className="text-center bg-success">Side</h1>
                </div>
            </div>
        </Base>
    )
}

export default HOme