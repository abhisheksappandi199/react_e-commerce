import React, { Component } from 'react'
import { Card ,Avatar ,Row} from 'antd';
import {Link} from 'react-router-dom'

class UserAddress extends Component {
    render() {
        return (
            <div>
                <Row gutter={[16 , 24]}>
                <button className='card-margin'>
                <Link to='/account/user'>
                <Card title="User Information" style={{ width: 300 }} >
                    <p>card content</p>
                </Card>
                </Link>
                </button>
                </Row>

                <Row gutter={[16 , 24]}>
                <button className='card-margin'>
                <Link to='/account/address/form'>
                <Card title="Add Adress" style={{ width: 300 }} >
                    <p><big><b>+</b></big></p>
                </Card>
                </Link>
                </button>
                </Row>
            </div>
        )
    }
}
export default UserAddress