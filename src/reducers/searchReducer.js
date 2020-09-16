const searchReducer = (state =[] ,action) =>{
    switch(action.type){
        case 'SEARCH_ITEMS' : {
            return [action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default searchReducer

