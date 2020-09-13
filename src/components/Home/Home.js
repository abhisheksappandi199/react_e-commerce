import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startGetproduct} from '../../actions/productAction'
import ProductList from '../ProductList/ProductList.js'
import ProductFilter from '../ProductFilter/ProductFilter.js'
import { Row, Col } from 'antd';


 class Home extends Component {
    constructor(){
        super()
        this.state={
       }
    }
    componentDidMount(){
        this.props.dispatch(startGetproduct())
    }

    render() {
        return (
            <div>
                <Row>
                <Col span={4}>
                <ProductFilter/>
                </Col>
                <Col span={20}>
                <ProductList/>
                </Col>
                </Row>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        login : state.login,
        products : state.products
    }
}

export default connect(mapStateToProps)(Home)