import axios from '../config/axios'

export const addOrders = (order) =>{
    return {type:'GET_ORDER' ,payload:order}
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
            console.log("this is data came from address server ",order);
            if(order){
                dispatch(addOrders(order))
                redirect()
            }  
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
}