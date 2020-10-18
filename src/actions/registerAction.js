import axios from '../config/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export const setRegister = (data) =>{
    return {type:'REGISTER' , payload : data}
}

export const startpostRegister = (registerdata , redirect) =>{
    return (dispatch) =>{
        axios.post('/users/register',registerdata)
        .then((response)=>{
            const data = response.data
            
            //console.log(data)
            if(!data.hasOwnProperty('errors')){
                toast.success('User successfully Registered' ,{
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    })
                dispatch(setRegister(data))
                redirect()
            //props.history.push('/home')
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}