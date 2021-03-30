// adding item to cart
export const addToItemCart = (item, next) => {
    let cart =[] 
    if (typeof window !== undefined){
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        cart.push({
            ...item,
            count: 1
        })
        localStorage.setItem("cart", JSON.stringify(cart))
        next();
    }
}

//loading cart item
export const loadCart = () => {
    if (typeof window !== undefined){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart"));
        }
    }
}

//removing item from cart
export const removeItemFromCart = (productId) => {
    let cart = []
    if (typeof window !== undefined){
        if(localStorage.getItem("cart")){
            cart= JSON.parse(localStorage.getItem("cart"));
        }
        cart.map((product,i)=>{
            if(productId === product._id){
                cart.splice(i, 1)
            }
        })
        localStorage.setItem("cart", JSON.stringify(cart))
    }   
    return cart
}

//emptying the cart
export const emptyCart = next => {
    if (typeof window !== undefined){
        if(localStorage.getItem("cart")){
            localStorage.removeItem("cart");
            let cart = [];
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }
}


