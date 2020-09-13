import axios from 'axios'

export const get = (user) =>{
    return {type:'GET_ACCOUNT' ,payload:user}
}

export const startGetAccount = () =>{
    return (dispatch) =>{
        axios.get('http://localhost:3333/api/account',{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            console.log(user);
            
            dispatch(get(user))
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}