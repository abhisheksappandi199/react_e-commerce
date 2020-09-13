import { logDOM } from '@testing-library/react'
import axios from 'axios'

export const addFirstCart = (user) =>{
    return {type:'ADD_FIRST_CARTITEM' ,payload:user}
}


export const startAddCart = (id)=>{
    return (dispatch) =>{
        console.log(id);
        axios.post(`http://localhost:3333/api/cartitems/addcart/${id}`,{
            headers : {
                'Authorization' : localStorage.getItem("authToken")
            },
        })
        .then((response)=>{
            const user = response.data
            console.log(user);
            if(!user.errors){
                dispatch(addFirstCart(user))
            }  
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}