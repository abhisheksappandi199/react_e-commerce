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
        case 'GET_INCREMENT' : {
            return state.map((cart)=>{
                if(cart._id === action.payload.cartid){
                        return {...cart , ...action.payload.obj}
                }else
                {
                    return {...cart}
                }

            })
        }
        case 'GET_DECREMENT': {
            return state.map((cart)=>{
                if(cart._id === action.payload.cartid){
                        return {...cart , ...action.payload.obj}
                }else
                {
                    return {...cart}
                }

            })
        }
        case 'REMOVE_CARTITEM_PRODUCT':{
            return state[0].products.filter(e => e._id != action.payload.productid)
        }
        case 'REMOVE_CARTITEM' : {
            return state.filter(e => e._id != action.payload)
        }
        default : {
            return [...state]
        }
    }
}
export default cartReducer