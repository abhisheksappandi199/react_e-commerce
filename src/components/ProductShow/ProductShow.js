import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {selectedProduct} from '../../selectors/productSelector'
import ProductDetails from '../ProductDetails/ProductDetails.js'

 class ProductShow extends Component {
     constructor(){
         super()
         this.state = {
             id : ''
         }
     }
 componentDidMount(){
     
 }
     
    render() {
        return (
            <div>
                <Row>
                <Col span={12}>
                    {console.log(this.props.product)}
                    <img src={this.props.product.image[0]}/>
                </Col>
                <Col span={12}>
                    <ProductDetails/>
                </Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    const path = window.location.pathname.split('/')
    const id = path[path.length - 1]
    console.log(id);
    return {
        products : state.products,
        product : selectedProduct(state.products , id)
    }
}

export default withRouter(connect(mapStateToProps)(ProductShow))