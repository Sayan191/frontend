import { API } from "../../backend";

export const createPayment =(userId,token,data)=>{
    return fetch(`${API}/create/payment/razerpay/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(data)
    }).then(response=>{
        return response.json()
    }).catch(err => console.log(err))
}

export const makePayment = (userId,token)=>{
    return fetch(``,{
        
    })
}