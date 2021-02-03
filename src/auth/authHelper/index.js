import {API} from "../../backend"

export const signin = user =>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept : "*/*",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    }).then(response =>{
        console.log(response)
        return response.json()
    }).catch(error =>{
        console.log(error)
    })
}

export const signup = user =>{
    return fetch(`${API}/signup`,{
        method:"POST",
        headers:{
            Accept : "*/*",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    }).then((response,error) =>{
            return response.json()
    }).catch(error =>{
        console.log(error)
    })
}

export const authenticate = (data, next) =>{
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt",JSON.stringify(data))
        next()
    }
}

export const signout = next =>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next()
    }

    return fetch(`${API}/signout`,{
        method:"GET"
    }).then(response =>{
        return response.json()
    }).catch(error =>{
        console.log(error)
    })
}

export const isAuthenticated = () =>{
    if (typeof window === "undefined"){
        return false
    }
    if (localStorage.getItem("jwt")){
        return localStorage.getItem("jwt")
    }
    else{
        return false
    }
}