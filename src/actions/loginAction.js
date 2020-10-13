import axios from '../config/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export const setuserlogin = (data) =>{
    return {type:'LOGIN_ERROR' , payload:data}
}

export const userdata = (data) =>{
    return {type:'LOGIN_TOKEN' , payload:data}
}

export const startPostLogin = (logindata,redirect) =>{
    return (dispatch) =>{
        axios.post('/users/login',logindata)
        .then((response)=>{
            const data = response.data
            //dispatch(setuserlogin(data))
            //console.log(data)
            
            if(data.hasOwnProperty('errors'))
            {
                dispatch(setuserlogin(data))
            }
            else{
                 localStorage.setItem("authToken", data.token)
                 toast.success('User successfully Logged IN' ,{
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    })
                // axios.get(`/products`)
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