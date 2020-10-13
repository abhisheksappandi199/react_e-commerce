const myorderReducer = (state =[] ,action) =>{
    switch(action.type){
        case 'GET_ORDER':{
            return [...action.payload]
        }
        case 'ADD_ORDER':{
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default myorderReducer