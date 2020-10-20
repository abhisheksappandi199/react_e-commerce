import axios from '../config/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export const addOrders = (order) =>{
    return {type:'ADD_ORDER' ,payload:order}
}
export const getOrders = (order) =>{
    return {type:'GET_ORDER' ,payload:order}
}


export const startGetOrders = () =>{
    return (dispatch) =>{
        axios.get('/orders',{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            //console.log("this is myorders",user);
            if(user.length > 0 && !user.errors){
                dispatch(getOrders(user))
            }
        })
        .catch((error)=>{
            //console.log(error);
            alert(error.message)
        })
    }
}

export const startAddOrders = (id ,data,redirect)=>{
    return (dispatch) =>{
        axios.post(`/myorders/${id}`,data,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const order = response.data
            //console.log("this is data came from address server ",order);
            if(order){
                dispatch(addOrders(order))
                redirect()
                toast.success('Order placed sucessfully' ,{
                    position: "top-center",
                    autoClose: 3500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    })
            }  
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
}