import axios from '../config/axios'

export const adminsetuserlogin = (data) =>{
    return {type:'ADMIN_LOGIN_ERROR' , payload:data}
}

export const adminuserdata = (data) =>{
    return {type:'ADMIN_LOGIN_TOKEN' , payload:data}
}

export const startAdminPostLogin = (logindata,redirect) =>{
    return (dispatch) =>{
        axios.post('/users/login/admin',logindata)
        .then((response)=>{
            const data = response.data
            //dispatch(setuserlogin(data))
            //console.log(data)
            
            if(data.hasOwnProperty('errors'))
            {
                dispatch(adminsetuserlogin(data))
            }
            else{
                localStorage.setItem("ownerToken", data.token)
                dispatch(adminuserdata(data))
                redirect()
            }
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
}