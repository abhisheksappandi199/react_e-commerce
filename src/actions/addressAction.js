import axios from 'axios'

export const getaddress = (user) =>{
    return {type:'GET_ADDRESS' ,payload:user}
}
export const addaddress = (user) =>{
    return {type:'ADD_ADDRESS' ,payload:user}
}
export const updateaddress = (_id ,obj) =>{
    return {type:'UPDATE_ADDRESS' , payload:{_id,obj}}
}
export const removeaddress = (id) =>{
    return {type:'REMOVE_ADDRESS' , payload:id} 
}


export const startGetaddress = () =>{
    return (dispatch) =>{
        axios.get('http://localhost:3333/api/address',{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            //console.log(user);
            
            dispatch(getaddress(user))
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}

export const startAddaddress = (data,redirect)=>{
    return (dispatch) =>{
        axios.post('http://localhost:3333/api/address',data,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            console.log(user);
            if(!user.errors){
                dispatch(addaddress(user))
                redirect()
            }  
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}
export const startUpdateaddress = (_id,obj) =>{
    return (dispatch)=>{
        axios.put(`http://localhost:3333/api/address/${_id}`,obj,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            if(!user.errors){
                dispatch(updateaddress(_id,user))
            }
            
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}
export const startRemoveaddress = (id) =>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3333/api/address/${id}`,{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const user = response.data
            if(!user.errors){
                dispatch(removeaddress(id))
            }
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
}