import axios from '../config/axios'

export const showproduct = (user) =>{
    return {type:'SHOW_PRODUCT' ,payload:user}
}
export const startShowproduct = (id)=>{
    return (dispatch) =>{
        axios.get(`/products/${id}`,{
            headers : {
                'Authorization' :  localStorage.getItem("ownerToken")
            }
        })
        .then((response)=>{
            const user = response.data
            console.log(user);
            if(!user.errors){
                dispatch(showproduct(user))
            }  
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}