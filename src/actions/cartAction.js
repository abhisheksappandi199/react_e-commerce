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
            if(!cart.errors){
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