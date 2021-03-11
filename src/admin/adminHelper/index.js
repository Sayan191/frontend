import {API} from "../../backend"


//create category
export const AddCategory = (userId,token,year) =>{
    return fetch(`${API}/create/category/${userId}`,{
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(year)
    }).then(response =>{
        return response.json();
    }).catch(err=>{ 
        console.log(err)
    })
}

//getting all categories
export const allcategory = () =>{
    return fetch(`${API}/categories`,{
        method:"GET",
        headers:{
            Accept: "application/json",
            "Content-Type" : "application/json",
        },
    }).then(response=> {
        return response.json()
    })
      .catch(err => console.log(err))
}


//creating products
export const AddProduct = (userId,token,formData) =>{
    return fetch(`${API}/create/product/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization: `Bearer ${token}`
        },
        body:formData
    }).then(response=>{
        return response.json()
    })
    .catch(err => console.log(err))
}