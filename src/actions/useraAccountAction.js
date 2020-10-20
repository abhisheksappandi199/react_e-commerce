import axios from '../config/axios'

export const getuser = (user) =>{
    return {type:'GET_USER_ACCOUNT' ,payload:user}
}
export const updateuser = (obj) =>{
    return {type:'UPDATE_USER_ACCOUNT' , payload:obj}
}

export const startGetUserAccount = () =>{
    return (dispatch) =>{
        axios.get('/account',{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            //console.log(user);
            
            dispatch(getuser(user))
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}
export const startUpdateUser = (obj) =>{
    return (dispatch)=>{
        axios.put(`/account/edit`,obj,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            if(!user.errors){
                dispatch(updateuser(user))
            }
            
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}