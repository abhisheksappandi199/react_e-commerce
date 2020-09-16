import React, { Component } from 'react'
import { Route , Link ,Switch } from 'react-router-dom'
import Login from '../../components/Login/Login.js'
import Register from '../../components/Register/Register.js'
import Home from '../../components/Home/Home.js'
import {connect} from 'react-redux'
import Account from '../../components/Account/Account.js'
import Header from '../../components/Header/Header.js'
import Admin from '../../components/Admin/Admin.js'
import Owner from '../../components/Owner/Owner.js'
import ProductShow from '../../components/ProductShow/ProductShow.js'
import UserInfo from '../../components/UserInfo/UserInfo.js'
import UserAddress from '../../components/UserAddress/UserAddress.js'
import Cart from '../../components/Cart/Cart.js'
import AddressForm from '../../components/AddressForm/AddressForm.js'
import Offers from '../../components/Offers/Offers.js'

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
            <Route path='/account' component={Account} exact={true}/>
            <Route path='/home' component={Home} exact={true}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/owner' component={Owner}/>
            <Route path='/home/:id' component={ProductShow}/>
            <Route path='/account/user' component={UserInfo}/>
            <Route path='/account/address' component={UserAddress} exact={true}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/account/address/form' component={AddressForm}/>
            <Route path='/offers' component={Offers}/>
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