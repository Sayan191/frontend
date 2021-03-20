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
        return response.json();
    })
      .catch(err => console.log(err))
}

//deleting a category
export const deleteCategory =(userId,token,categoryId) =>{
    return fetch(`${API}/remove/category/${userId}/${categoryId}`,{
        method:"DELETE",
        headers:{
            Accept: "application/json",
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}`
        }
    }).then(response =>{
        return response.json()
    }).catch(err=> console.log(err))
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

//getting all category
export const allCategory = () =>{
    return fetch(`${API}/products`,{
        method:"GET",
        headers:{
            Accept: "application/json",
            "Content-Type" : "application/json",
        }
    }).then(response=>{
        return response.json();
    }).catch(err=>console.log(err))
}

//deleting products
export const deleteProd =(userId,token,ProductId) =>{
    return fetch(`${API}/delete/${ProductId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization: `Bearer ${token}`
        },
    }).then(response=>{
        return response.json();
    }).catch(err=>console.log(err))
}