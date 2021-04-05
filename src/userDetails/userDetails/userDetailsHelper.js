import { API } from "../../backend";

export const getUser = (userId) =>{
    return fetch(`${API}/user/${userId}`,{
        method:"GET",
        headers:{
            Accept: "application/json",
        }
    }).then(response=>{
        return response.json()
    }).catch(err=>console.log(err))
}

export const updateUser=(userId,token,data)=>{
    return fetch(`${API}/update/user/${userId}`,{
        method:"PUT",
        headers:{
            Accept: "application/json",
            "content-type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body:JSON.stringify(data)
    }).then(response=>{
        return response.json()
    }).catch(err=>console.log(err))
}