const categoryhReducer = (state =[] ,action) =>{
    switch(action.type){
        case 'GET_CATEGORY' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default categoryhReducer

