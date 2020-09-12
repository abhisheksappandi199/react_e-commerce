import React, { Component } from 'react'
import { Route , Link ,Switch } from 'react-router-dom'
import Login from '../Login/Login.js'
import Register from '../Register/Register.js'
import Home from '../Home/Home.js'
import {connect} from 'react-redux'
import Account from '../Account/Account.js'
import Header from '../Header/Header.js'
import Admin from '../Admin/Admin.js'
import Owner from '../Owner/Owner.js'
import ProductShow from '../ProductShow/ProductShow.js'


class Routes extends Component {
    constructor(){
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div>
              
            <Header/>
            
            <Link to='/'/>
            <Link to='/register'/>
            <Link to='/home'/>
            <Link to='/acount'/>
            <Link to='/admin'/>
            <Link to='/owner'/>

            <Switch>
            <Route path='/' component={Login} exact={true}/>
            <Route path='/register' component={Register}/>
            <Route path='/account' component={Account}/>
            <Route path='/home' component={Home} exact={true}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/owner' component={Owner}/>
            <Route path='/home/:id' component={ProductShow}/>
            </Switch>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        login : state.login
    }
}
export default connect(mapStateToProps)(Routes)