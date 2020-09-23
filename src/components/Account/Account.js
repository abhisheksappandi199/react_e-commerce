import React, { Component } from 'react'
import { Card ,Avatar ,Row} from 'antd';
import {Link} from 'react-router-dom'
import image from '../../photo.jpg'
import './account.css'

class Account extends Component {
    handleChange = () => {
        window.alert('functionality under progress')
    }
    render() {
        return (
            <div className='account-margin'>
                
                <Row gutter={[16 , 24]}>

                <button className='card-margin'>
                <Link to='/account/user'>
                <Card title="User Information" style={{ width: 300 }} >
                    <p>card content</p>
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

                <button className='card-margin' onClick={this.handleChange}> 
                <Card title="Payment Details" style={{ width: 300 }}>
                    <p>Card content</p>
                </Card>
                </button>
                </Row>
            </div>
        )
    }
}
export default Account