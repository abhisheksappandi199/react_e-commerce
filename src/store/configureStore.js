import { createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import registerReducer from '../reducers/registerReducer'
import loginReducer from '../reducers/loginReducer'
import adminReducer from '../reducers/adminReducer'
import productReducer from '../reducers/productReducer'
import showReducer from '../reducers/showReducer'
import userAccountReducer from '../reducers/userAccountReducer'
import cartReducer from '../reducers/cartReducer'
import addressReducer from '../reducers/addressReducer'
import searchReducer from '../reducers/searchReducer'
import categoryhReducer from '../reducers/categoryReducer'
import billReducer from '../reducers/billReducer'
import myorderReducer from '../reducers/myorderReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        register : registerReducer,
        login : loginReducer,
        admin : adminReducer,
        products : productReducer,
        product : showReducer,
        user : userAccountReducer ,
        cart : cartReducer ,
        address : addressReducer ,
        search : searchReducer ,
        category : categoryhReducer ,
        bill : billReducer ,
        myorder : myorderReducer

    }), applyMiddleware(thunk))
    return store
}

export default configureStore