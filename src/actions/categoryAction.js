import axios from '../config/axios'

export const getcategory = (user) =>{
    return {type:'GET_CATEGORY' ,payload:user}
}
export const addcategory = (user) =>{
    return {type:'ADD_CATEGORY' ,payload:user}
}
export const updatecategory = (_id ,obj) =>{
    return {type:'UPDATE_CATEGORY' , payload:{_id,obj}}
}
export const removecategory = (id) =>{
    return {type:'REMOVE_CATEGORY' , payload:id} 
}


export const startGetcategory = () =>{
    return (dispatch) =>{
        axios.get('/category',{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            ////console.log(user);
            
            dispatch(getcategory(user))
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}

export const startAddcategory = (data,redirect)=>{
    return (dispatch) =>{
        axios.post('/category',data,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            //console.log(user);
            if(!user.errors){
                dispatch(addcategory(user))
                redirect()
            }  
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}
export const startUpdatecategory = (_id,obj) =>{
    return (dispatch)=>{
        axios.put(`/category/${_id}`,obj,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            if(!user.errors){
                dispatch(updatecategory(_id,user))
            }
            
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}
export const startRemovecategory = (id) =>{
    return (dispatch)=>{
        axios.delete(`/category/${id}`,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            if(!user.errors){
                dispatch(removecategory(id))
            }
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
}