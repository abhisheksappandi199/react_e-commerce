const cartReducer = (state =[] ,action) =>{
    switch(action.type){
        case 'GET_CARTITEM' : {
            return [action.payload]
        }
        case 'ADD_FIRST_CARTITEM':{
            return [...state ,action.payload]
        }
        case 'ADD_CARTITEM':{
            return state.map((cart)=>{
                if(cart._id === action.payload.id){
                    return {...cart ,...action.payload.obj}
                }else
                {
                    return {...cart}
                }

            })
        }
        default : {
            return [...state]
        }
    }
}
export default cartReducer