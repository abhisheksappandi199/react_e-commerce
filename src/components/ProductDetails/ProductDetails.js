import React, { Component } from 'react'
import { Button } from 'antd'
import {connect} from 'react-redux'
import {startAddCart} from '../../actions/cartAction'
import './ProductDetails.css'

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
            <div style={{padding:'30px'}}>
              <h2><b>{this.props.product.name}</b></h2>
             <hr/>
             <h2 className='greeting'><b>Rs. { this.props.product.price}/-</b></h2>
             <h5 className='greeting' style={{color : 'green'}}><b>*Including taxes</b></h5>
             <small className='greeting' style={{color : 'green'}}><b>*Free Shipping</b></small><br/>


            <h4><b>Description : </b></h4>
             <h4>{this.props.product.description}</h4><br/>
             <h5><b>Stock :</b> {this.props.product.stock}</h5>
             <h4><b>color :</b> {this.props.product.color}</h4>
             <h4><b>Size :</b> {this.props.product.size} Meters.</h4>
             <small style={{color: '#603F00 ' }}>
                 <li>Direct from weavers</li>
                 <li>High Quality Products</li>
                 <li>Great service</li>
             </small>
             <br/><br/>
             <Button 
                style={{background: "#389CD5" }} //background: "#389CD5 ", borderColor: "white"
                type="primary"
                onClick={()=>{this.handleAddCart(this.props.product._id)}}>
                    Add to Cart
            </Button>
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