const adminReducer = (state = {}, action) =>{
    switch(action.type){
        case 'ADMIN_LOGIN_ERROR' : {
            return {...action.payload}
        }
        case 'ADMIN_LOGIN_TOKEN' : {
           return {...action.payload}
        }
        default : { 
            return {...state}
        }
    }
}
export default adminReducer