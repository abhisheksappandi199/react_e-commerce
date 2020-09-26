const billReducer = (state =[] ,action) =>{
    switch(action.type){
        case 'GET_BILL':{
            return [action.payload]
        }
        case 'REMOVE_BILL':{
            return [...state ,...action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default billReducer