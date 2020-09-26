import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startGetBill} from '../../actions/billAction'
import { Row, Col ,Avatar} from 'antd'
import Payment from '../Payment/Payment.js'
import './checkout.css'

class Checkout extends Component {
    componentDidMount(){
            console.log('component did mount');
            this.props.dispatch(startGetBill())
        
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={14}>
                        <h2 align='center'>Bill Details</h2>
                        {
                            this.props.bill.length > 0 ? (
                                <>
                                { this.props.bill[0].lineItems[0].products.map(e => {
                                    return (
                                        <div className="float-container" key={e._id}>
                                        <Avatar className="float-image" shape="square" size={128} icon={<img src={e.image}/>}></Avatar>
                                        <h3 className="float-child">Product :  </h3><h3>{e.product}</h3>
                                        <h3 className="float-child">Price :    </h3><h3>Rs.{e.price}/-</h3>
                                        <h3 className="float-child">Quantity : </h3><h3>{e.quantity}</h3>
                                        <h3 className="float-child">Subtotal : </h3><h3>Rs.{e.subtotal}/-</h3>
                                        </div>
                                    )
                                }) }
                                <h2 align='center'>Total : <b>Rs.{this.props.bill[0].total}/-</b></h2>
                                {/* <h3>Created At :</h3><p>{this.props.bill[0].createdAt.slice(0 ,19)}</p> */}
                                </>
                            ) : ''
                        }
                    </Col>
                    <Col span={10}>
                        <Payment />
                    </Col>
                    </Row> 
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        bill : state.bill ,
        products : state.products 
    }
}
export default connect(mapStateToProps)(Checkout)