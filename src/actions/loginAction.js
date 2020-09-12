import axios from 'axios'

export const setuserlogin = (data) =>{
    return {type:'LOGIN_ERROR' , payload:data}
}

export const userdata = (data) =>{
    return {type:'LOGIN_TOKEN' , payload:data}
}

export const startPostLogin = (logindata,redirect) =>{
    return (dispatch) =>{
        axios.post('http://localhost:3333/api/users/login',logindata)
        .then((response)=>{
            const data = response.data
            //dispatch(setuserlogin(data))
            //console.log(data)
            
            if(data.hasOwnProperty('errors'))
            {
                dispatch(setuserlogin(data))
            }
            else{
                // localStorage.setItem("authToken", data.token)
                // axios.get(`http://localhost:3333/api/products`)
                // .then((response)=>{
                //     const allProducts = response.data
                //     //console.log(allProducts);
                    dispatch(userdata(data))
                    redirect()
                // })
                // .catch((error)=>{
                //     alert(error.message)
                // })
               
            }
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
}