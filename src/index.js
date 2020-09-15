import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import App from './App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {startGetUserAccount} from './actions/useraAccountAction'
import {startGetproduct} from './actions/productAction'
import {startGetCart} from './actions/cartAction'

const store = configureStore()
console.log('store initial state', store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

//for hanlding the reloads
if(localStorage.getItem('authToken')){
    //store.dispatch(startGetUserAccount())
    //store.dispatch(startGetproduct())
    //store.dispatch(startGetCart(localStorage.getItem('cartid')))
}

const jsx = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>   
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))
