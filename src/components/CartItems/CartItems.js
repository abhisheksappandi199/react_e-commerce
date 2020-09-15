import React, { Component } from 'react'
import { Card ,Avatar, Tooltip } from 'antd';
import { Row, Col } from 'antd';
import {startGetCartIncrement , startGetCartDecrement ,startRemoveCartProduct} from '../../actions/cartAction'
import {connect} from 'react-redux'

class CartItems extends Component {
    handleIncrement = (product) =>{
        console.log(product);
        this.props.dispatch(startGetCartIncrement(this.props.cart[0]._id , product._id))
    }
    handleDecrement = (product) =>{
        console.log(product);
        this.props.dispatch(startGetCartDecrement(this.props.cart[0]._id , product._id))
    }
    handleRemoveProduct = (product) => {
        this.props.dispatch(startRemoveCartProduct(this.props.cart[0]._id , product._id))
    }
    render() {
        let total = 0
        this.props.cart[0].products.map(e =>{
            return total += e.price * e.quantity
        })
        return (
            <div>
            <h1>Total : Rs.{total}/-</h1>
            {
                this.props.cart[0] && ( this.props.cart[0].products.length > 0 ? ( this.props.cart[0].products.map((product , index) => {
                    return( 
                        <div key={index}>   
                        <Card style={{ width: 500 }} >
                        <Row>
                        <Col span={10}>
                        {/* <Avatar shape="square" size={128} icon={<img src={product.image}/>} /> */}
                        </Col>
                        <Col span={14}>
                            <h3><b>{product._id}</b></h3>
                            <hr/>
                            <button onClick={()=>{this.handleIncrement(product)}}>+</button>
                            {product.quantity}
                            <button onClick={()=>{this.handleDecrement(product)}}>-</button><br/>
                            <h3>Price :Rs.{product.price}/-</h3> 
                            <h3>Subtotal : <b>Rs.{product.price * product.quantity}/-</b></h3> 
                            <button onClick={()=>{this.handleRemoveProduct(product)}}>remove</button>
                        </Col>
                        </Row>
                        </Card>
                        
                        </div>
                    ) 
                })) : '' )
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
export default connect(mapStateToProps)(CartItems)
