import axios from '../config/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export const getcart = (cart) =>{
    return {type:'GET_CARTITEM' ,payload:cart}
}
export const addFirstCart = (cart) =>{
    return {type:'ADD_FIRST_CARTITEM' ,payload:cart}
}
export const addCart = (cart) =>{
    return {type:'ADD_CARTITEM' ,payload:{cart}}
}
export const getincrement = (cartid,productid,obj) =>{
    return {type:'GET_INCREMENT' ,payload:{cartid,productid ,obj}}
}
export const getdecrement = (cartid,productid,obj) =>{
    return {type:'GET_DECREMENT' ,payload:{cartid,productid,obj}}
}
export const removecartproduct = (cartid,productid) =>{
    return {type:'REMOVE_CARTITEM_PRODUCT' , payload:{cartid,productid}}
}
export const removecart = (id) => {
    return {type:'REMOVE_CARTITEM' ,payload :id}
}

export const startGetCart = () =>{
    return (dispatch) =>{
        axios.get(`/cartitems`,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            ////console.log(user);
            if(user){
                dispatch(getcart(user))
            }
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}

// export const startAddFirstCart = (id)=>{
//     return (dispatch) =>{
//         axios.get(`/cartitems/addcart/${id}`,{
//             headers : {
//                 'Authorization' : localStorage.getItem("authToken")
//             },
//         })
//         .then((response)=>{
//             const cart = response.data
//             //console.log(cart);
//             if(!cart.errors || ( !cart[0].driver) ){
//                 dispatch(addFirstCart(cart))
//             }  
//         })
//         .catch((error)=>[
//             //console.log(error.message)
//         ])
//     }
// }
export const startAddCart = (obj)=>{
    return (dispatch) =>{
        axios.post(`/cartitems/add`,obj,{
            headers : {
                'Authorization' : localStorage.getItem("authToken")
            },
        })
        .then((response)=>{
            const cart = response.data
            //console.log("this is cart",cart);
            if(!cart.errors){
                toast.success('Added to Cart', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                dispatch(addCart(cart))
            }
        })
        .catch((error)=>{
            //console.log(error.message)
        })
    }
}
export const startGetCartIncrement = (cartid,productid) =>{
    return (dispatch) =>{
        axios.put(`/cartitems/quantity/${cartid}/${productid}?type=up`,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            //console.log(user);
            
            dispatch(getincrement(cartid,productid ,user))
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}
export const startGetCartDecrement = (cartid,productid) =>{
    return (dispatch) =>{
        axios.put(`/cartitems/quantity/${cartid}/${productid}?type=down`,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            //console.log(user);
            
            dispatch(getdecrement(cartid,productid ,user))
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}
export const startRemoveCartProduct = (cartid,productid) =>{
    return (dispatch)=>{
        axios.delete(`/cartitems/remove/${cartid}/${productid}`,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            if(!user.errors){
                dispatch(removecartproduct(cartid,productid))
            }
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
}

export const startRemoveCart = (id) =>{
    return (dispatch)=>{
        axios.delete(`/cartitems/removecart/${id}`,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            if(!user.errors){
                dispatch(removecart(id))
            }
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
}