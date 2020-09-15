import axios from 'axios'

export const getcart = (cart) =>{
    return {type:'GET_CARTITEM' ,payload:cart}
}
export const addFirstCart = (cart) =>{
    return {type:'ADD_FIRST_CARTITEM' ,payload:cart}
}
export const addCart = (id ,cart) =>{
    return {type:'ADD_CARTITEM' ,payload:{id,cart}}
}
export const getincrement = (cartid,productid,obj) =>{
    return {type:'GET_INCREMENT' ,payload:{cartid,productid ,obj}}
}
export const getdecrement = (cartid,productid,obj) =>{
    return {type:'GET_DECREMENT' ,payload:{cartid,productid,obj}}
}
export const removecart = (cartid,productid) =>{
    return {type:'REMOVE_CARTITEM_PRODUCT' , payload:{cartid,productid}}
}

export const startGetCart = (id) =>{
    return (dispatch) =>{
        axios.get(`http://localhost:3333/api/cartitems/${id}`,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            console.log(user);
            
            dispatch(getcart(user))
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}

export const startAddFirstCart = (id)=>{
    return (dispatch) =>{
        axios.get(`http://localhost:3333/api/cartitems/addcart/${id}`,{
            headers : {
                'Authorization' : localStorage.getItem("authToken")
            },
        })
        .then((response)=>{
            const cart = response.data
            console.log(cart);
            if(!cart.errors || ( !cart[0].driver) ){
                dispatch(addFirstCart(cart))
            }  
        })
        .catch((error)=>[
            console.log(error.message)
        ])
    }
}
export const startAddCart = (id,obj)=>{
    return (dispatch) =>{
        axios.post(`http://localhost:3333/api/cartitems/add/${id}`,obj,{
            headers : {
                'Authorization' : localStorage.getItem("authToken")
            },
        })
        .then((response)=>{
            const cart = response.data
            console.log(cart);
            if(!cart.errors){
                dispatch(addCart(id ,cart))
            }  
        })
        .catch((error)=>[
            console.log(error.message)
        ])
    }
}
export const startGetCartIncrement = (cartid,productid) =>{
    return (dispatch) =>{
        axios.put(`http://localhost:3333/api/cartitems/quantity/${cartid}/${productid}?type=up`,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            console.log(user);
            
            dispatch(getincrement(cartid,productid ,user))
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}
export const startGetCartDecrement = (cartid,productid) =>{
    return (dispatch) =>{
        axios.put(`http://localhost:3333/api/cartitems/quantity/${cartid}/${productid}?type=down`,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            console.log(user);
            
            dispatch(getdecrement(cartid,productid ,user))
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}
export const startRemoveCartProduct = (cartid,productid) =>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3333/api/cartitems/remove/${cartid}/${productid}`,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            if(!user.errors){
                dispatch(removecart(cartid,productid))
            }
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
}