import React, { Component } from 'react'
import { Route , Link ,Switch, Redirect } from 'react-router-dom'
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
import Help from '../../components/Help/Help.js'
import List from '../../components/List/List.js'
import Checkout from '../../components/Checkout/Checkout.js'
import UserOrders from '../../components/UserOrders/UserOrders.js'
import Footer from '../../components/Footer/Footer.js'

class Routes extends Component {
    constructor(){
        super()
        this.state = {
        }
    }
    render() {
        const authenticate = localStorage.getItem('authToken')
        return (
            <div>
              
            <Header/>
            
            <Link to='/'/> 
            <Link to='/register'/>
            <Link to='/home'/>
            <Link to='/acount'/>
            <Link to='/admin'/>
            <Link to='/owner'/>

            {/* <Switch>
            <Route path='/' component={Login} exact={true}/>
            <Route path='/register' component={Register}/>
            <Route path='/account' component={Account} exact={true}/>
            <Route path='/home' component={Home} exact={true}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/owner' component={Owner}/>
            <Route path='/list/:id' component={ProductShow}/>
            <Route path='/account/user' component={UserInfo}/>
            <Route path='/account/address' component={UserAddress} exact={true}/>
            <Route path='/account/orders' component={UserOrders} exact={true}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/account/address/form' component={AddressForm}/>
            <Route path='/help' component={Help}/>
            <Route path='/list' component={List}/>
            <Route path='/checkout' component={Checkout}/>
            </Switch> */}

            <Switch>
            <Route path='/' component={Login} exact={true}/>
            <Route path='/register' component={Register}/>
            <Route path='/account' render={ () => (authenticate ? ( <Account to='/account' /> ) : ( <Redirect to='/' /> )) } exact={true} />
            <Route path='/home' render={ () => (authenticate ? ( <Home to='/home' /> ) : ( <Redirect to='/' /> )) } exact={true}/>

            <Route path='/admin'  component={Admin}/>
            <Route path='/owner' render={ () => (localStorage.getItem('ownerToken') ? ( <Owner to='/owner' /> ) : ( <Redirect to='/admin' /> )) }/>

            <Route path='/list/:id' render={ () => (authenticate ? ( <ProductShow to='/list/:id' /> ) : ( <Redirect to='/' /> )) }  /> 
            <Route path='/account/user' render={ () => (authenticate ? ( <UserInfo to='/account/user' /> ) : ( <Redirect to='/' /> )) } />
            <Route path='/account/address' render={ () => (authenticate ? ( <UserAddress to='/account/address' /> ) : ( <Redirect to='/' /> )) } exact={true}/>
            <Route path='/account/orders' render={ () => (authenticate ? ( <UserOrders to='/account/orders' /> ) : ( <Redirect to='/' /> )) } exact={true}/>
            <Route path='/cart' render={ () => (authenticate ? ( <Cart to='/cart' /> ) : ( <Redirect to='/' /> )) } />
            <Route path='/account/address/form' component={AddressForm}/>
            {/* <Route path='/account/address/form' render={ () => (authenticate ? ( <AddressForm to='/account/address/form' /> ) : ( <Redirect to='/' /> )) } /> */}
            <Route path='/help' render={ () => (authenticate ? ( <Help to='/help' /> ) : ( <Redirect to='/' /> )) } />
            <Route path='/list' render={ () => (authenticate ? ( <List to='/list' /> ) : ( <Redirect to='/' /> )) } />
            <Route path='/checkout' render={ () => (authenticate ? ( <Checkout to='/checkout' /> ) : ( <Redirect to='/' /> )) } />
            </Switch>

            <Footer />

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