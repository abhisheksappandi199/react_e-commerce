import React, { Component } from 'react'
import { Tabs , Button} from 'antd'
import './owner.css'
import Product from './Product'
import TotalOrders from './TotalOrders'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const {TabPane} = Tabs

class Owner extends Component {
    hanldeAdminLogout = () =>{
        localStorage.clear()
        this.props.history.push('/')
    }
    render() {
        return (
                <div className="card-container">
                    
                    <Tabs type="card">
                    <TabPane tab="Create Product" key="1">
                        <Product/>
                    </TabPane>
                    <TabPane tab="Total Orders" key="2">
                        <TotalOrders/>
                    </TabPane>
                    <TabPane tab="Tab Title 3" key="3">
                        <p>hi</p>
                    </TabPane>
                    <TabPane tab='sd' key="4">
                    <Button type="primary" onClick={this.hanldeAdminLogout}>logout</Button>
                    </TabPane>
                    </Tabs>
                </div>
        )
    }
}
export default withRouter(connect()(Owner))