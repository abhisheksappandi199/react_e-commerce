import axios from '../config/axios'

export const setRegister = (data) =>{
    return {type:'REGISTER' , payload : data}
}

export const startpostRegister = (registerdata , redirect) =>{
    return (dispatch) =>{
        axios.post('/users/register',registerdata)
        .then((response)=>{
            const data = response.data
            dispatch(setRegister(data))
            //console.log(data)
            if(!data.hasOwnProperty('errors')){
                redirect()
            //props.history.push('/home')
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}