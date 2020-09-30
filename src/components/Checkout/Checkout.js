import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startGetBill} from '../../actions/billAction'
import {startGetaddress} from '../../actions/addressAction'
import { Row, Col ,Avatar, Card} from 'antd'
import Payment from '../Payment/Payment.js'
import './checkout.css'

class Checkout extends Component {
    componentDidMount(){
            console.log('component did mount');
            this.props.dispatch(startGetBill())
            this.props.dispatch(startGetaddress())
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={9}>
                        <h2 align='center'>Bill Details</h2>
                        {
                            this.props.bill.length > 0 ? (
                                <>
                                { this.props.bill[0].lineItems[0].products.map(e => {
                                    return (
                                        <div className="float-container" key={e._id}>
                                        <Avatar className="float-image" shape="square" size={128} icon={<img src={e.image}/>}></Avatar>
                                        <h3 className="float-child">Product :  </h3><h3>{e.productname}</h3>
                                        <h3 className="float-child">Price :    </h3><h3>Rs.{e.price}/-</h3>
                                        <h3 className="float-child">Quantity : </h3><h3>{e.quantity}</h3>
                                        <h3 className="float-child">Subtotal : </h3><h3>Rs.{e.subtotal}/-</h3>
                                        </div>
                                    )
                                }) }
                                <h2 align='right'>Total : <b>Rs.{this.props.bill[0].total}/-</b></h2>
                                {/* <h3>Created At :</h3><p>{this.props.bill[0].createdAt.slice(0 ,19)}</p> */}
                                </>
                            ) : ''
                        }
                    </Col>
                    
                    <Col span={9}>
                        <div align='center'>
                        <h2 align='center'>Address Details</h2>
                        <Card  style={{ width: 370 }}>
                            { this.props.address.length > 0 && (
                                <div align='left'>
                                <h5><b><i>{this.props.address[0].name}</i></b></h5>
                                <h5><i>{this.props.address[0].street}</i></h5>
                                <h5><i>Landmark : {this.props.address[0].landmark}</i></h5>
                                <h5><i>{this.props.address[0].city} , {this.props.address[0].states} {this.props.address[0].pincode}</i></h5>
                                <h5><i>Phone No. {this.props.address[0].mobile}</i></h5>
                                {this.props.address[0].alternatemobile && (<h5><i>Alternative No. {this.props.address[0].alternatemobile}</i></h5>) }
                                </div>
                            )}
                        </Card>
                        </div>
                    </Col>

                    <Col span={6}>
                        <h2 align ='center'>Payment</h2>
                        <h2><li>Razorpay</li></h2>
                        <h3>Total Amount : Rs.{this.props.bill.length > 0 && this.props.bill[0].total}/-</h3>
                        <Payment 
                            bill_id={this.props.bill.length > 0 && this.props.bill[0]._id}
                        />
                    </Col>
                    </Row> 
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        bill : state.bill ,
        products : state.products ,
        address : state.address
    }
}
export default connect(mapStateToProps)(Checkout)