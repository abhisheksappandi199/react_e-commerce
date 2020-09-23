import React, { Component } from 'react'
import { Button } from 'antd'
import {connect} from 'react-redux'
import {startAddCart} from '../../actions/cartAction'

class ProductDetails extends Component {
    constructor(props){
        super()
        this.state={
            product : props.product
        }
    }
    // handleAddFirstCart = (id) => {
    //     this.props.dispatch(startAddFirstCart(id))
    // }
    handleAddCart = (id) => {
        const obj ={
            product : id ,
            quantity : 1
        }
        this.props.dispatch(startAddCart(obj))
    }
    render() {
        return (
            <div>
              <h2><b>{this.props.product.name}</b></h2>
             <hr/>
             <h2><b>Rs. { this.props.product.price}/-</b></h2>
             <br/>
             <h4>{this.props.product.description}</h4>
             <Button onClick={()=>{this.handleAddCart(this.props.product._id)}}>Add to Cart</Button>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
     return {
         cart : state.cart
     }
}
export default connect(mapStateToProps)(ProductDetails)