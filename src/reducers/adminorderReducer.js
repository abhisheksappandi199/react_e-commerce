const adminorderReducer = (state =[] ,action) =>{
    switch(action.type){
        case 'GET_ADMIN_ORDER':{
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default adminorderReducer