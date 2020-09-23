import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startGetCart} from '../../actions/cartAction'
import { Row, Col } from 'antd'
import {Link } from 'react-router-dom'
import CartItems from '../CartItems/CartItems.js'
import UserAddress from '../UserAddress/UserAddress'

class Cart extends Component {
    componentDidMount(){
        // const id = ( this.props.cart.length === 1 && (this.props.cart[0]._id) )
        // console.log(id);
        // if(id){
            
        //     //localStorage.setItem('cartid',id)
        // }
        this.props.dispatch(startGetCart())
    }
    handleGetBill =() => {
        if(this.props.address.length > 0){
            console.log("checkout");
        }
        else{
            window.alert('Please fill the address')
        }
    }
    render() {
        return (
            <div>
                {
                this.props.cart.length == 0 ? <h1 align='center'>Cart is Empty</h1> : (
                  <div>
                    <Row>
                    <Col span={14}>
                        <h1 align='center'>Cart Deatils</h1>
                        <CartItems data={this.props.cart}/>
                    </Col>
                    <Col span={10}>
                        <h1 align='center'>Address Deatils</h1>
                        <UserAddress/><br/>
                        {
                            this.props.address.length > 0 ? <button onClick={this.handleGetBill}><Link to='/checkout'>Check Out</Link></button> :
                            <button onClick={this.handleGetBill}>Check Out</button>
                        }
                        
                    </Col>
                    </Row>
                  </div>    
                )
                }
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        cart : state.cart,
        address : state.address
    }
}
export default connect(mapStateToProps)(Cart)