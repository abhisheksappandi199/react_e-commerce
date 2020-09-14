import React, { Component } from 'react'
import { Card ,Avatar } from 'antd';
import { Row, Col } from 'antd';

class CartItems extends Component {
    render() {
        return (
            <div>
            {
                this.props.data[0].products.map(product => {
                    return(
                        <Card style={{ width: 500 }}>
                        <Row>
                        <Col span={10}>
                        <Avatar shape="square" size={128} icon={<img src={product.image}/>} />
                        </Col>
                        <Col span={14}>
                            <p>sdgfjfs</p>
                        </Col>
                        </Row>
                        </Card>
                    )
                })
            }
            </div>
        )
    }
}
export default CartItems
