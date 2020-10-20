import axios from '../config/axios'

export const getAdminOrders = (order) =>{
    return {type:'GET_ADMIN_ORDER' ,payload:order}
}

export const startGetAdminOrders = () =>{
    return (dispatch) =>{
        axios.get('/orders/all',{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            if(user.length > 0 && !user.errors){
                dispatch(getAdminOrders(user))
            }
        })
        .catch((error)=>{
            //console.log(error);
            alert(error.message)
        })
    }
}