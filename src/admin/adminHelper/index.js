import {API} from "../../backend"

//CATEGORY
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

//getting a category
export const getaCategory = (categoryId) =>{
    return fetch(`${API}/category/${categoryId}`,{
        method:"GET",
        headers:{
            Accept: "application/json",
            "Content-Type" : "application/json",
        }
    }).then(response=>{
        return response.json()
    }).catch(err=>console.log(err))
}

//updating a category
export const updateCate=(categoryId,userId,token,category)=>{
    return fetch(`${API}/manage/category/${userId}/${categoryId}`,{
        method:"PUT",
        headers:{
            Accept: "application/json",
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}`
        },
        body:JSON.stringify(category)
    }).then(response=>{
        return response.json()
    }).catch(err=>console.log(err))
}


//PRODUCTS
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

//getting all products
export const allProduct = () =>{
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

// getting a product
export const getaProduct = (productId) =>{
    console.log(productId)
    return fetch(`${API}/product/${productId}`,{
        method:"GET",
    }).then(response=>{
        return response.json()
    }).catch(err=>console.log(err))
}

//updaing a product
export const updateProducts = (productId,userId,token,formData) =>{
    return fetch(`${API}/manage/${productId}/${userId}`,{
        method:"PUT",
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