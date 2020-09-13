import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {selectedProduct} from '../../selectors/productSelector'
import ProductDetails from '../ProductDetails/ProductDetails.js'
import './productshow.css'

 class ProductShow extends Component {
     constructor(){
         super()
         this.state = {
             id : ''
         }
     }  
    render() {
       
        return (
            <div className='product-show-margin'>
               {
                this.props.product && (
                    <Row>
                    <Col span={12}>
                        <img src={this.props.product.image[0]}/>
                    </Col>
                    <Col span={12}>
                        <ProductDetails product={this.props.product}/>
                    </Col>
                    </Row>
                )
               }
            </div>
        )
    }
}
const mapStateToProps = (state,props) =>{
   const id = props.match.params.id
    //let id = localStorage.getItem('selectedProduct')
    // const path = window.location.pathname.split('/')
    // const id = path[path.length - 1]
    //localStorage.setItem('selectedProduct',id)
    return {
        product : selectedProduct(state.products , id)
    }
}

export default withRouter(connect(mapStateToProps)(ProductShow))