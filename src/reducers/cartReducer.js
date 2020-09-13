const cartReducer = (state =[] ,action) =>{
    switch(action.type){
        case 'ADD_FIRST_CARTITEM':{
            return [...state ,action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default cartReducer