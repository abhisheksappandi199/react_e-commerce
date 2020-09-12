import { createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import registerReducer from '../reducers/registerReducer'
import loginReducer from '../reducers/loginReducer'
import adminReducer from '../reducers/adminReducer'
import productReducer from '../reducers/productReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        register : registerReducer,
        login : loginReducer,
        admin : adminReducer,
        products : productReducer

    }), applyMiddleware(thunk))
    return store
}

export default configureStore