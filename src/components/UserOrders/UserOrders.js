import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Row, Col , Card, Avatar} from 'antd'
import {startGetOrders} from '../../actions/myorderAction'
import Moment from 'react-moment'
import './userorder.css'

class UserOrders extends Component {
    componentDidMount(){
        if(this.props.myorder.length == 0){
            this.props.dispatch(startGetOrders())
        }
    }
    render() {
        return (
            <div align='center' style={{ minHeight : '50vh' }}>
                {
                     this.props.myorder.length > 0 ? ( this.props.myorder[0] && 
                     
                        ( (this.props.myorder[0].myorders.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt) )).map((e , index)=> {
                            return (
                                <div   className='overlap' key={index}><br/>
                                <Card style={{ width: 900 }}>
                                <Row>
                                <Col span={4} >
                                    {
                                        e.lineItems[0].products.map((ele ,i)=> {
                                            return (
                                                <div key={i}>
                                                    <Avatar shape="square" size={128} icon={<img src={ele.image}/>} align='left'/><br/><br/>
                                                </div>
                                            )
                                        })
                                    }
                                </Col>
                                <Col span={12}>
                                {
                                        e.lineItems[0].products.map((ele,i) => {
                                            return (
                                                <div key={i}>
                                                    <h4>Item : {ele.productname}</h4>
                                                    <h4>Price : Rs.{ele.price}/-</h4>
                                                    <h4>Quantity : {ele.quantity}</h4>
                                                    <h4>subtotal : Rs.{ele.subtotal}/-</h4><br/><br/>   
                                                </div>
                                            )
                                        })
                                }
                                </Col>
                                <Col span={8}>
                                <h4><b>Ordered At :</b> <Moment format="DD-MM-YYYY HH:mm">{e.date}</Moment></h4>
                                <h4><b>Order_Id :</b> {e.ids.razorpay_order_id}</h4>
                                <h4><b>Payment_id :</b> {e.ids.razorpay_payment_id}</h4><br/>
                                <h3>Total : <b>Rs.{e.total}/-</b></h3>
                                </Col>
                                </Row>
                                </Card><br/>
                                </div>
                            )
                        }))
                     )
                     : ''
                }
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        myorder : state.myorder
    }
}
export default connect(mapStateToProps)(UserOrders)