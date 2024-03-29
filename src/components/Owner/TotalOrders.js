import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Row, Col , Card, Avatar} from 'antd'
import {startGetAdminOrders} from '../../actions/adminorderAction'

class TotalOrders extends Component {
  componentDidMount(){
    if(this.props.adminorder.length == 0){
        this.props.dispatch(startGetAdminOrders())
    }
}
  render() {
    return (
      <div align='center'>
                {
                     this.props.adminorder.length > 0 ? ( this.props.adminorder && 
                     
                        ( this.props.adminorder.map((element , index)=> {
                            return (
                            element.myorders.map((e,i) => {
                              return (
                                <div   className='overlap' key={i}><br/>
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
                                <h4>Ordered At : {e.date}</h4>
                                <h4>Order_Id : {e.ids.razorpay_order_id}</h4>
                                <h4>Payment_id : {e.ids.razorpay_payment_id}</h4><br/>
                                <h3>Total : <b>Rs.{e.total}/-</b></h3>
                                </Col>
                                </Row>
                                </Card><br/>
                                </div>
                              )
                            })
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
      adminorder : state.adminorder
  }
}
export default connect(mapStateToProps)(TotalOrders)