import { createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import registerReducer from '../reducers/registerReducer'
import loginReducer from '../reducers/loginReducer'
import adminReducer from '../reducers/adminReducer'
import productReducer from '../reducers/productReducer'
import showReducer from '../reducers/showReducer'
import cartReducer from '../reducers/cartReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        register : registerReducer,
        login : loginReducer,
        admin : adminReducer,
        products : productReducer,
        product : showReducer,
        cart : cartReducer

    }), applyMiddleware(thunk))
    return store
}

export default configureStore