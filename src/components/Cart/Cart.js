import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startGetCart} from '../../actions/cartAction'
import { Row, Col } from 'antd';
import CartItems from '../CartItems/CartItems.js'
import Checkout from '../Checkout/Checkout.js'

class Cart extends Component {
    componentDidMount(){
        const id = ( this.props.cart.length === 1 && (this.props.cart[0]._id) )
        console.log(id);
        if(id){
            this.props.dispatch(startGetCart(id))
            //localStorage.setItem('cartid',id)
        }
    }
    render() {
        return (
            <div>
                {
                this.props.cart.length == 0 ? <h1 align='center'>Cart is Empty</h1> : (
                  <div>
                    <Row>
                    <Col span={18}>
                        <CartItems data={this.props.cart}/>
                    </Col>
                    <Col span={6}>
                        <Checkout/>
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
        cart : state.cart
    }
}
export default connect(mapStateToProps)(Cart)