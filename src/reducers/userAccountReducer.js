const userAccountReducer = (state ={} ,action) =>{
    switch(action.type){
        case 'GET_USER_ACCOUNT':{
            return {...action.payload}
        }
        case 'UPDATE_USER_ACCOUNT':{
            return {...state ,...action.payload}
        }
        default : {
            return {...state}
        }
    }
}
export default userAccountReducer