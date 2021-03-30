import { API } from "../../backend";

export const getProducts = ()=>{
    return fetch(`${API}/products`,{
        method:"GET",
    }).then(reponse=>{
        return reponse.json()
    }).catch(err=>console.log(err))
}