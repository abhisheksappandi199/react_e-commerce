import React, { Component } from 'react'
import { Card ,Avatar ,Row} from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startGetOrders} from '../../actions/myorderAction'
import './account.css'

class Account extends Component {
    handleChange = () => {
        window.alert('functionality under progress')
    }
    // handleGetOrders =() =>{
    //     if(this.props.myorder.length == 0){
    //         this.props.dispatch(startGetOrders())
    //     }
    // }
    render() {                   // onClick={this.handleGetOrders}
        return (
            <div className='account-margin'>
                
                <Row gutter={[16 , 24]}>

                <button className='card-margin'>
                <Link to='/account/user'>
                <Card title="User Information" style={{ width: 300 }} >
                </Card>
                </Link>
                </button>

                <button className='card-margin'> 
                <Link to='/account/orders'>
                <Card title="Your Orders" style={{ width: 300 }} > 
                </Card>
                </Link>
                </button>

                <button className='card-margin' onClick={this.handleChange}> 
                {/* <Link to='/account/address'> */}
                <Card title="User Address" style={{ width: 300 }}>
                    <p>Card content</p>
                </Card>
                {/* </Link> */}
                </button>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        myorder : state.myorder
    }
}
export default connect(mapStateToProps)(Account)