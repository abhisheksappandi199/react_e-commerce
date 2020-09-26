const addressReducer = (state =[] ,action) =>{
    switch(action.type){
        case 'GET_ADDRESS':{
            return [action.payload]
        }
        case 'ADD_ADDRESS':{
            return [...state , action.payload]
        }
        case 'UPDATE_ADDRESS':{
            return state.map((message)=>{
                if(message._id === action.payload._id){
                    return {...message ,...action.payload.obj}
                }else
                {
                    return {...message}
                }

            })
        }
        case 'REMOVE_ADDRESS':{
            return state.filter(e => e._id != action.payload)
        }
        default : {
            return [...state]
        }
    }
}
export default addressReducer