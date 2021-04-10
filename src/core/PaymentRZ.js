import React, { useEffect, useState } from "react"
import { isAuthenticated } from "../auth/authHelper/index";
import { createPayment } from "./coreHelper/paymentHelper";


const PaymentRZ = ({products={products}, setReload=f=>f, reload = undefined}) =>{
    
    const [values,setValues] = useState({
        
    })


    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;


    const razerHandler = e =>{
        e.preventDefault();
        let amount = getAmount();
        createPayment(userId,token,{amount}).then().catch()
    }   
    
    const getAmount = () =>{
        let amount = 0; 
        products.map((p) =>{
            amount = amount+ p.price
        })
        return amount
    }

}

export default PaymentRZ;